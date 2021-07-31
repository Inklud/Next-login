import Cookie from "js-cookie";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://login.apiblic.com";

// Delete user
export const deleteItem = (props) => {
  const token = Cookie.get("token");
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .delete("https://login.apiblic.com/links/" + props, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        //redirect back to home page for restaurance selection
        //Router.push("/");
        // console.log(res);
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};
