import React from "react";
import Meta from "./../components/Meta";
import Hola from "./../components/Hola";
import { useRouter } from "./../util/router";

function AuthPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Auth" />
      <Hola
        bgColor="#fff"
        size="large"
        type={router.query.type}
        providers={["google"]}
        afterAuthPath="/listLine"
        logo={{
          height: 50,
        }}
      />
    </>
  );
}

export default AuthPage;
