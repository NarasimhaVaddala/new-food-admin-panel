import React from "react";

export default function Table({ headings, children }) {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {headings?.map((e, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      {e}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Row = ({ children }) => <tr>{children}</tr>;
export const Cell = ({ children }) => (
  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
    {children}
  </td>
);
