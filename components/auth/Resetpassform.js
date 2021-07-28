import React, { useState } from "react";
import { resetPass } from "../../lib/auth";

export default function Resetpassform(props) {
  const [data, updateData] = useState({
    password: "",
    code: props.code,
  });
  const [PasswordResetted, setPasswordResetted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  function onChange(event) {
    event.preventDefault();
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  const submitForm = async (e) => {
    e.preventDefault();
    data.code = props.code;
    data.password = e.target.password.value;
    setLoading(true);
    resetPass(data.password, data.code)
      .then((res) => {
        setLoading(false);
        setPasswordResetted(true);
        // console.log("New passsword sent");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.data) {
          setError(error.response.data);
        } else {
          setError("login successful");
        }
        setLoading(false);
      });
  };

  return (
    <div className="container flex mt-3 mb-16">
      <div className="max-w-md w-full">
        <div className="bg-white border-t border-gray-200 rounded-lg overflow-hidden shadow-2xl">
          {!PasswordResetted && (
            <div className="p-8">
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: "red" }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  );
                })}
              <form onSubmit={submitForm}>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block text-left mb-2 text-sm font-medium text-gray-600"
                  >
                    New password
                  </label>

                  <input
                    onChange={(event) => onChange(event)}
                    name="password"
                    type="password"
                    className="block  text-left w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3 mt-4 bg-gray-800 hover:bg-gray-900 text-white rounded shadow"
                >
                  {loading ? "Setting new password... " : "Set new password"}
                </button>
              </form>
            </div>
          )}

          {PasswordResetted && (
            <div className="p-8">
              Your passwor has been resetted. You may now login.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
