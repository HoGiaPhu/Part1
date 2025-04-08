import React from "react";

function DetailedReport() {
  const reports = [
    {
      name: "Elizabeth Lee",
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
    },
    {
      name: "Carlos Garcia",
      company: "SnoozeShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
    },
    {
      name: "Elizabeth Bailey",
      company: "PrimeTime Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
    },
    {
      name: "Ryan Brown",
      company: "OmniTech Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
    },
    {
      name: "Ryan Young",
      company: "DataStream Inc.",
      value: "$769",
      date: "01/05/2023",
      status: "Completed",
    },
    {
      name: "Hailey Adams",
      company: "FlowRush",
      value: "$922",
      date: "10/06/2023",
      status: "Completed",
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Detailed Report</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left border border-gray-200 opacity-50">
              Customer Name
            </th>
            <th className="p-3 text-left border border-gray-200 opacity-50">
              Company
            </th>
            <th className="p-3 text-left border border-gray-200 opacity-50">
              Order Value
            </th>
            <th className="p-3 text-left border border-gray-200 opacity-50">
              Order Date
            </th>
            <th className="p-3 text-left border border-gray-200 opacity-50">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border border-gray-200 opacity-50 flex items-center">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                {report.name}
              </td>
              <td className="p-3 border border-gray-200 opacity-50">
                {report.company}
              </td>
              <td className="p-3 border border-gray-200 opacity-50">
                {report.value}
              </td>
              <td className="p-3 border border-gray-200 opacity-50">
                {report.date}
              </td>
              <td className="p-3 border border-gray-200 opacity-50">
                <span
                  className={`px-2 py-1 rounded ${
                    report.status === "New"
                      ? "bg-blue-100 text-blue-600"
                      : report.status === "In-progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {report.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <p>63 results</p>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-pink-500 text-white rounded mr-2">
            Import
          </button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded">
            Export
          </button>
        </div>
        <div className="flex items-center">
          <button className="px-2 py-1 border rounded">←</button>
          <button className="px-2 py-1 bg-pink-500 text-white rounded mx-1">
            1
          </button>
          <button className="px-2 py-1 border rounded mx-1">2</button>
          <button className="px-2 py-1 border rounded mx-1">3</button>
          <button className="px-2 py-1 border rounded mx-1">4</button>
          <span className="mx-1">...</span>
          <button className="px-2 py-1 border rounded mx-1">10</button>
          <button className="px-2 py-1 border rounded">→</button>
        </div>
      </div>
    </div>
  );
}

export default DetailedReport;
