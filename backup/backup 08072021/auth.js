/* /lib/auth.js */

import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://login.apiblic.com";

// Delete user
export const deleteUser = (props) => {
  const token = Cookie.get("token");
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/users/` + props, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        //redirect back to home page for restaurance selection
        //Router.push("/");
        console.log(res);
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

// Forgotten pass
export const forgotPass = (email) => {
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/forgot-password`, { email })
      .then((res) => {
        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        //redirect back to home page for restaurance selection
        //Router.push("/");
        console.log(res);
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

// Reset pass
export const resetPass = (password, code) => {
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  var passwordConfirmation = password;
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/reset-password`, {
        password,
        passwordConfirmation,
        code,
      })
      .then((res) => {
        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        //redirect back to home page for restaurance selection
        //Router.push("/");
        console.log(res);
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

//register a new user
export const registerUser = (username, email, password) => {
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/register`, { username, email, password })
      .then((res) => {
        //set token response from Strapi for server validation
        Cookie.set("token", res.data.jwt, { sameSite: "strict", secure: true });
        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        //redirect back to home page for restaurance selection
        Router.push("/");
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

// Login
export const login = (identifier, password) => {
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/`, { identifier, password })
      .then((res) => {
        //set token response from Strapi for server validation
        localStorage.removeItem("logout");
        Cookie.set("token", res.data.jwt, { sameSite: "strict", secure: true });
        //localStorage.setItem("userInfo", JSON.stringify(res.data.user));
        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        //redirect back to home page for restaurance selection
        //console.log(window.location.pathname);
        if (window.location.pathname == "/login") {
          Router.push("/");
        }
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

// Logout
export const logout = () => {
  //remove token and user cookie
  Cookie.remove("token", { sameSite: "strict", secure: true });
  //localStorage.removeItem("userInfo");
  delete window.__user;
  // sync logout between multiple windows
  window.localStorage.setItem("logout", Date.now());
  //redirect to the home page
  Router.push("/login");
};

// Logout with redirect to homepage
export const logoutgohome = () => {
  //remove token and user cookie
  Cookie.remove("token", { sameSite: "strict", secure: true });
  //localStorage.removeItem("userInfo");
  delete window.__user;
  // sync logout between multiple windows
  window.localStorage.setItem("logout", Date.now());
  //redirect to the home page
  Router.push("./");
};

//Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement
export const withAuthSync = (Component) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};
