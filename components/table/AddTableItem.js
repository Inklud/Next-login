import { useState } from "react";
import { addItem } from "../../lib/handleforms";
import Router from "next/router";

export default function AddTableItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [data, updateData] = useState({
    url: "",
    title: "",
    description: "",
  });

  function toggleAddItems() {
    setIsOpen((prevCheck) => !prevCheck);
  }

  function onChange(event) {
    event.preventDefault();
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    data.url = e.target.url.value;
    data.text = e.target.text.value;
    data.description = e.target.description.value;
    data.users_permissions_user = props.userId;
    setLoading(true);
    addItem(data.url, data.text, data.description, data.users_permissions_user)
      .then((res) => {
        // set authed user in global context object
        Router.reload(window.location.pathname);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.data) {
          setError(error.response.data);
        } else {
          setError("not added");
        }
        setLoading(false);
      });
  }

  return (
    <>
      {!isOpen && (
        <div className="w-full">
          <div className="float-left">
            <button
              onClick={() => toggleAddItems()}
              className="h-8 mb-6 font-medium px-4 leading-none rounded text-white bg-gray-800 hover:bg-gray-900"
            >
              <span>Add bookmarks</span>
            </button>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="clear-both mt-3 mb-8 bg-white shadow border rounded border-gray-800">
          <div className="flex flex-wrap justify-between items-center px-6 py-6">
            <div className="w-full">
              <p className="inline-block text-lg md:text-xl text-gray-800  font-semibold">
                Add bookmark
              </p>
              <div
                onClick={() => toggleAddItems()}
                className="inline-block text-right float-right ml-5 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
            <form className="w-full mt-3 max-w-2xl" onSubmit={submitForm}>
              <div className="mt-3 flex flex-wrap mb-1">
                <label className="w-full pb-3" htmlFor="title">
                  Title:
                </label>
                <div className="w-full md:w-3/4">
                  <input
                    className="appearance-none placeholder-gray-800 inline-block w-full py-3 px-4 mb-4 md:mb-0 text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none"
                    type="text"
                    id="userinput"
                    onChange={(event) => onChange(event)}
                    name="text"
                    required
                    aria-label="Insert link text"
                  />
                </div>
                <label className="w-full pb-3 pt-3" htmlFor="url">
                  URL:
                </label>
                <div className="w-full md:w-3/4">
                  <input
                    className="appearance-none placeholder-gray-800 inline-block w-full py-3 px-4 mb-4 md:mb-0 text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none"
                    type="text"
                    onChange={(event) => onChange(event)}
                    id="userinput"
                    name="url"
                    required
                    aria-label="Insert link text"
                  />
                </div>
                <label className="w-full pb-3 pt-3" htmlFor="description">
                  Description:
                </label>
                <div className="w-full md:w-3/4">
                  <input
                    className="appearance-none placeholder-gray-800 inline-block w-full py-3 px-4 mb-4 md:mb-0 text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none"
                    type="text"
                    onChange={(event) => onChange(event)}
                    name="description"
                    id="userinput"
                    required
                    aria-label="Insert link text"
                  />
                </div>
                <div className="w-full">
                  <button
                    name="submit"
                    type="submit"
                    className="font-medium mt-8 py-4 px-4 leading-none text-white rounded bg-gray-800 hover:bg-gray-900"
                  >
                    <span>
                      {loading ? "Adding bookmark... " : "Add bookmark"}
                    </span>
                  </button>
                </div>

                <div aria-live="polite" className="mt-4 text-red-800 hidden">
                  ❌
                </div>
              </div>

              <div aria-live="polite" className="mt-4 text-green-800 hidden">
                ✔️ Project has been added!
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
