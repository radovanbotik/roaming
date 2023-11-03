import React from "react";
import destinationsData from "../destinationsData";
import { CursorArrowRippleIcon } from "@heroicons/react/24/outline";

// console.log(destinationsData);
let letterKey = {};
destinationsData.map(country => {
  let firstLetter = country.country[0];
  if (letterKey[firstLetter]) {
    letterKey[firstLetter].push(country);
  } else {
    letterKey[firstLetter] = [];
  }
});

const keys = Object.keys(letterKey);

// keys.map(key => {
//   console.log(letterKey[key]);
// });

// keys.map(key => {
//   console.log(
//     letterKey[key].map(country => {
//       return country;
//     })
//   );
// });

const Table = props => {
  const { setDestination, setOpen } = props;
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Destinations</h2>
      <div className="overflow-x-auto">
        <table className="p-6 w-full text-xs text-left  table-fixed">
          <colgroup>
            <col className="w-10" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-10" />
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-700">
              <th className="p-3 whitespace-nowrap">A-Z</th>
              <th className="p-3 break-words">Destination</th>
              <th className="p-3 break-words">Select Unlimited Domestic Plans</th>
              <th className="p-3">International Day Pass®</th>
              <th className="p-3">Pay-Per-Use</th>
              <th className="p-3">Available Technology</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>

          {keys.map(letter => {
            return (
              <tbody key={letter} className="border-b dark:bg-gray-900 dark:border-gray-700">
                {letterKey[letter].map(country => {
                  return (
                    <tr key={country.country}>
                      <td className="px-3 text-2xl font-medium dark:text-gray-400">
                        {letterKey[letter][0] === country && letter}
                      </td>

                      <>
                        <td className="px-3 py-2">
                          <p>{country.country}</p>
                        </td>
                        <td className="px-3 py-2">
                          <span>{country.sudp ? "Yes" : "No"}</span>
                          {/* <p className="dark:text-gray-400">Spirit Media</p> */}
                        </td>
                        <td className="px-3 py-2">
                          <p>{country.idp ? "Yes" : "No"}</p>
                        </td>
                        <td className="px-3 py-2">
                          <p>{country.ppu ? "Yes" : "No"}</p>
                        </td>
                        <td className="px-3 py-2">
                          <p>{country.technology.join("/")}</p>
                          {/* <p className="dark:text-gray-400">United Kingdom</p> */}
                        </td>
                        <td className="px-3 py-2">
                          <button
                            type="button"
                            title="Open details"
                            className="p-1 rounded-full
                             hover:dark:bg-gray-700 focus:dark:bg-gray-700"
                            onClick={e => {
                              setDestination(country);
                              setOpen(true);
                            }}
                          >
                            <CursorArrowRippleIcon className="w-4 h-4" />
                          </button>
                        </td>
                      </>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
