import Link from "next/link";
import { Notification } from "../components";
import { deleteItem } from "../lib/listLogic";
import Router from "next/router";

export default function LinksTable(props) {
  // console.log(props);
  var listItems = props.links;

  function deleteIt(props) {
    //   console.log(props);
    deleteItem(props)
      .then((res) => {
        console.log("deleted");
        // console.log(res);
        Router.reload(window.location.pathname);
      })
      .catch((error) => {
        console.log("error");
      });
  }

  return (
    <div className="mt-2 bg-white rounded-b shadow">
      {listItems.length !== 0 ? (
        <div className="flex-wrap justify-between items-center px-6 py-6">
          <p className="w-full text-lg md:text-xl text-gray-800 font-semibold">
            Links
          </p>

          <div className="mt-5 w-full overflow-auto border">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded">
              <thead>
                <tr className="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th className="pl-6 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4">
                    Link
                  </th>
                  <th className="pl-0 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4">
                    Description
                  </th>
                  <td className="pr-8">
                    <button className="w-32 opacity-0 bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm cursor-default">
                      View
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                {listItems.map((item) => (
                  <tr
                    key={item.id}
                    className="h-16 border-gray-300 border-t border-b hover:border-indigo-300 hover:shadow-md transition duration-150 ease-in-out"
                  >
                    <td className="pl-6 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      <Link href={item.url}>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          className="underline hover:no-underline text-blue-600"
                        >
                          {item.text}
                        </a>
                      </Link>
                    </td>
                    <td className="pl-0 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {item.description}
                    </td>
                    <td className="pr-8 text-right">
                      <button
                        onClick={() => deleteIt(item.id)}
                        className="bg-red-800 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-red-900 rounded text-white px-5 py-1 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Notification message="You have no links yet." />
      )}
    </div>
  );
}
