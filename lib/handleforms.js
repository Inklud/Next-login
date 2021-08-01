import Cookie from "js-cookie";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://login.apiblic.com";
const token = Cookie.get("token");

// Delete Item
export const deleteItem = (props) => {
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/links/` + props, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //resolve the promise and pass the result object back to the form
        resolve(res);
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};
