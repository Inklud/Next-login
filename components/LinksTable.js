import Link from "next/link";
import { Notification } from "../components";

export default function LinksTable(props) {
  console.log(props);
  var listItems = props.links;
  return (
    <div class="mt-2 bg-white rounded-b shadow">
      {listItems.length !== 0 ? (
        <div class="flex-wrap justify-between items-center px-6 py-6">
          <p class="w-full text-lg md:text-xl text-gray-800 font-semibold">
            Links
          </p>

          <div class="mt-5 w-full overflow-auto border">
            <table class="min-w-full bg-white dark:bg-gray-800 rounded">
              <thead>
                <tr class="w-full h-12 border-gray-300 dark:border-gray-200 border-b py-8 bg-indigo-100">
                  <th class="pl-6 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4">
                    Link
                  </th>
                  <th class="pl-0 text-gray-600 font-bold pr-6 text-left text-sm tracking-normal leading-4">
                    Description
                  </th>
                  <td class="pr-8">
                    <button class="w-32 opacity-0 bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 py-1 text-sm cursor-default">
                      View
                    </button>
                  </td>
                </tr>
              </thead>
              <tbody>
                {listItems.map((item) => (
                  <tr
                    key={item.id}
                    class="h-16 border-gray-300 border-t border-b hover:border-indigo-300 hover:shadow-md transition duration-150 ease-in-out"
                  >
                    <td class="pl-6 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
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
                    <td class="pl-0 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                      {item.description}
                    </td>
                    <td class="pr-8 text-right">
                      {/*<button class="bg-red-800 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:border-gray-800 focus:shadow-outline-gray hover:bg-red-900 rounded text-white px-5 py-1 text-sm">
                      Delete
              </button>*/}
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
