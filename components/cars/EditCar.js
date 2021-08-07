import { useState, useContext, useEffect } from "react";
import { editItem, getItem } from "../../lib/handleCarsForm";
import AppContext from "../../context/AppContext";

export default function EditTableItem(props) {
  const { setIsCarsData } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [data, updateData] = useState({
    text: "",
    description: "",
  });

  useEffect(() => {
    setUrl(props.item.url);
    setText(props.item.brand);
    setDescription(props.item.description);
  }, [props.item]);

  useEffect(() => {
    setIsOpen(true);
  }, [props.timestamp]);

  const [url, setUrl] = useState(props.item.url);
  const [text, setText] = useState(props.item.text);
  const [description, setDescription] = useState(props.item.description);

  function toggleAddItems() {
    setIsOpen(false);
  }

  function onChange(event) {
    event.preventDefault();
    updateData({ ...data, [event.target.name]: event.target.value });
  }

  function closeform() {
    setIsOpen(false);
  }

  function submitForm(e) {
    e.preventDefault();
    data.text = e.target.text.value;
    data.description = e.target.description.value;
    data.users_permissions_user = props.userId;
    data.itemId = props.item.id;
    setLoading(true);
    editItem(
      data.text,
      data.description,
      data.users_permissions_user,
      data.itemId
    )
      .then((res) => {
        // set authed user in global context object
        getIt();
        setLoading(false);
        setIsOpen(false);
      })
      .catch((error) => {
        if (error.response.data) {
          setError(error.response.data);
        } else {
          console.log("Error, could not edit:" + error);
          setError("not added");
        }
        setLoading(false);
      });
  }

  function getIt(props) {
    getItem(props)
      .then((res) => {
        setIsCarsData(res.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  return (
    <>
      {isOpen && (
        <div className="clear-both mt-8 mb-8 bg-white shadow border rounded border-gray-800">
          <div className="flex flex-wrap justify-between items-center px-6 py-6">
            <div className="w-full">
              <p className="inline-block text-lg md:text-xl text-gray-800  font-semibold">
                Edit car
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
                  Brand:
                </label>
                <div className="w-full md:w-3/4">
                  <input
                    className="appearance-none placeholder-gray-800 inline-block w-full py-3 px-4 mb-4 md:mb-0 text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none"
                    type="text"
                    id="userinput"
                    onChange={(event) => {
                      setText(event.target.value);
                      onChange(event);
                    }}
                    name="text"
                    required
                    aria-label="Insert link text"
                    value={text}
                  />
                </div>
                <label className="w-full pb-3 pt-3" htmlFor="description">
                  Description:
                </label>
                <div className="w-full md:w-3/4">
                  <input
                    className="appearance-none placeholder-gray-800 inline-block w-full py-3 px-4 mb-4 md:mb-0 text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded md:rounded-r-none"
                    type="text"
                    onChange={(event) => {
                      setDescription(event.target.value);
                      onChange(event);
                    }}
                    name="description"
                    id="userinput"
                    required
                    aria-label="Insert link text"
                    value={description}
                  />
                </div>
                <div className="w-full">
                  <button
                    name="submit"
                    type="submit"
                    className="font-medium mt-8 py-4 px-4 leading-none text-white rounded bg-gray-800 hover:bg-gray-900"
                  >
                    <span>{loading ? "Editing car... " : "Edit car"}</span>
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
