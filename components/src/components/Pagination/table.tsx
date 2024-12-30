import React from "react";
import Spinner from "../Spinner";
import Text from "../Text/Text";

interface Column {
  title: string;
  key: string;
  id: string | number;
}

interface TableProps {
  data: Record<string, any>[];
  coloum: Column[];
  className?: string;
  loading: boolean;
}

const Table: React.FC<TableProps> = ({ data, coloum, className, loading }) => {
  return (
    <div
      className={`relative overflow-x-scroll max-w-full rounded-lg border border-gray-200 shadow-sm ${className}`}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
          <Spinner size="w-12 h-12" color="border-blue-600" />
        </div>
      )}
      <div className="overflow-y-auto" style={{ maxHeight: "800px" }}>
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              {coloum.map((item) => (
                <th
                  key={item.key}
                  className="px-6 py-3 text-left font-medium text-gray-700 uppercase tracking-wider"
                >
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {coloum.map((col) => (
                  <td key={col.key} className="px-6 py-4 text-gray-900">
                    {typeof row[col.key] === "string" ? (
                      <Text content={row[col.key]} color="gray" />
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
