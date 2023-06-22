import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Section from "./Section";
import SectionHeader202 from "./SectionHeader202";
import Auth from "./Auth";
import AuthFooter from "./AuthFooter";

function Hola(props) {
  // Options by auth type
  const optionsByType = {
    signup: {
      // Top Title
      title: "Get yourself an account",
      // Button text
      buttonAction: "Sign up",
      // Footer text and links
      showFooter: true,
      signinText: "Already have an account?",
      signinAction: "Entrar",
      signinPath: "/auth/signin",
      // Terms and privacy policy agreement
      showAgreement: true,
      termsPath: "/legal/terms-of-service",
      privacyPolicyPath: "/legal/privacy-policy",
    },
    signin: {
      title: "Welcome back",
      buttonAction: "Entrar",
      showFooter: true,
      signupAction: "Create an account",
      signupPath: "/auth/signup",
      forgotPassAction: "Recuperar contraseña",
      forgotPassPath: "/auth/forgotpass",
    },
    forgotpass: {
      title: "Get a new password",
      buttonAction: "Reset password",
      showFooter: true,
      signinText: "Remember it after all?",
      signinAction: "Sign in",
      signinPath: "/auth/signin",
    },
    changepass: {
      title: "Choose a new password",
      buttonAction: "Change password",
    },
  };

  // Ensure we have a valid auth type
  const type = optionsByType[props.type] ? props.type : "signin";

  // Get options object for current auth type
  const options = optionsByType[type];

  return (
    <Card
      style={{ zIndex: 100, width: "100%", marginLeft: "0%", marginTop: "0em" }}
    >
      <CardContent>
        <Section>
          <Container maxWidth="xs">
            <SectionHeader202
              title={options.title}
              subtitle=""
              size={4}
              textAlign="center"
            />
            <Card>
              <Auth
                type={type}
                buttonAction={options.buttonAction}
                providers={props.providers}
                afterAuthPath={props.afterAuthPath}
                key={type}
              />
            </Card>

            {options.showFooter && <AuthFooter type={type} {...options} />}
          </Container>
        </Section>
      </CardContent>
    </Card>
  );
}

export default Hola;
