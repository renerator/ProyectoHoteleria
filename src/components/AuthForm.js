import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from "react-hook-form";
import { Link } from "./../util/router";
import { useAuth } from "./../util/auth";

function AuthForm(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      return auth.signin(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(true);
      });
    },
    signup: ({ email, pass }) => {
      return auth.signup(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    forgotpass: ({ email }) => {
      return auth.sendPasswordResetEmail(email).then(() => {
        setPending(false);
        // Show success alert message
        props.onFormAlert({
          type: "success",
          message: "Password reset email sent",
        });
      });
    },
    changepass: ({ pass }) => {
      return auth.confirmPasswordReset(pass).then(() => {
        setPending(false);
        // Show success alert message
        props.onFormAlert({
          type: "success",
          message: "Your password has been changed",
        });
      });
    },
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      email,
      pass,
    }).catch((error) => {
      setPending(false);
      // Show error alert message
      props.onFormAlert({
        type: "error",
        message: error.message,
      });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container={true} spacing={2}>
          {["signup", "signin", "forgotpass"].includes(props.type) && (
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="email"
                label="Correo"
                name="email"
                placeholder="user@example.com"
                error={errors.email ? true : false}
                helperText={errors.email && errors.email.message}
                fullWidth={true}
                inputRef={register({
                  required: "Por favor introduzca su correo electrónico",
                })}
              />
            </Grid>
          )}

          {["signup", "signin", "changepass"].includes(props.type) && (
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="password"
                label="Contraseña"
                name="pass"
                error={errors.pass ? true : false}
                helperText={errors.pass && errors.pass.message}
                fullWidth={true}
                inputRef={register({
                  required: "Porfavor ingrese una contraseña",
                })}
              />
            </Grid>
          )}

          {["signup", "changepass"].includes(props.type) && (
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="password"
                label="Confirm Password"
                name="confirmPass"
                error={errors.confirmPass ? true : false}
                helperText={errors.confirmPass && errors.confirmPass.message}
                fullWidth={true}
                inputRef={register({
                  required: "Please enter your password again",
                  validate: (value) => {
                    if (value === getValues().pass) {
                      return true;
                    } else {
                      return "This doesn't match your password";
                    }
                  },
                })}
              />
            </Grid>
          )}

          <Grid item={true} xs={12} mb={2}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={pending}
              fullWidth={true}
            >
              {!pending && <span>{props.buttonAction}</span>}

              {pending && <CircularProgress size={28} />}
            </Button>
          </Grid>
        </Grid>
      </form>
      <div mb={5} />
    </>
  );
}

export default AuthForm;
