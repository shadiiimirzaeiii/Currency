interface TableProps {
  headers: string[];
  tableData: string[][];
}

const Table = ({ tableData, headers }: TableProps) => {
  return (
    <div className="relative overflow-x-auto my-2">
      <table className="w-full text-sm text-gray-500">
        <thead className="text-xs text-gray-800 uppercase border-y border-indigo-500">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className={`px-6 py-3 ${
                  index === 0
                    ? "rounded-s-lg"
                    : index === headers.length - 1
                    ? "rounded-e-lg"
                    : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-whit"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

export const headers = ["واریزی ها", "برداشت ها", "جمع"];

export const tableData = [
  ['Apple MacBook Pro 17"', "1", "$2999"],
  ["Microsoft Surface Pro", "1", "$1999"],
  ["Magic Mouse 2", "1", "$99"],
];
