import Cookie from "js-cookie";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://login.apiblic.com";

// Get Item
export const getItem = () => {
  const token = Cookie.get("token");
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/cars`, {
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

// Add Item
export const addItem = (text, description, users_permissions_user) => {
  const token = Cookie.get("token");
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${API_URL}/cars`,
        {
          brand: text,
          description,
          users_permissions_user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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

// Edit Item
export const editItem = (text, description, users_permissions_user, itemId) => {
  const token = Cookie.get("token");
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .put(
        `${API_URL}/cars/` + itemId,
        {
          brand: text,
          description,
          users_permissions_user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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

// Delete Item
export const deleteItem = (itemId) => {
  const token = Cookie.get("token");
  //prevent function from being ran on the server
  if (typeof window === "undefined") {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API_URL}/cars/` + itemId, {
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
