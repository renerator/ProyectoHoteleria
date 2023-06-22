import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import AuthForm from "./AuthForm";
import { useRouter } from "./../util/router";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      <Card style={{ zIndex: 100 }}>
        {formAlert && (
          <>
            <Box mb={3}>
              <Alert severity={formAlert.type}>{formAlert.message}</Alert>
            </Box>

            {["signup", "signin"].includes(props.type) && (
              <>
                {props.providers && props.providers.length && (
                  <>
                    <Box textAlign="center" fontSize={12} my={2}>
                      OR
                    </Box>
                  </>
                )}
              </>
            )}
          </>
        )}
      </Card>
      <AuthForm
        type={props.type}
        buttonAction={props.buttonAction}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />
    </>
  );
}

export default Auth;
