import { useEffect } from "react";
import Router from "next/router";

export const getParamValues = () => {
  useEffect(() => {
    const access_token = location.hash.match(
      new RegExp("access_token=([^&]*)")
    );
    document.cookie = access_token[0];
    Router.push("/dashboard");
  }, []);

  return null;
};

export default getParamValues;
