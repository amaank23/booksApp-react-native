import React, { useEffect, useLayoutEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../../firebaseConfig";

const auth = getAuth(app);
const Logout = () => {
  useLayoutEffect(() => {
    signOut(auth)
      .then(() => {
        console.log("Logout Success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return <></>;
};

export default Logout;
