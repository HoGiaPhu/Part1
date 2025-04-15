import React from "react";
import Overview from "./Overview";
import DetailedReport from "./DetailedReport";

function MainContent() {
  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
        <div className="flex items-center">
          <div className="relative">
            <input
              className="px-4 py-2 border rounded-md pl-10"
              placeholder="Search..."
              type="text"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <i className="fas fa-bell ml-4 text-gray-600"></i>
          <i className="fas fa-question-circle ml-4 text-gray-600"></i>
          <img
            alt="User Avatar"
            className="w-10 h-10 rounded-full ml-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV53shMASa_kpwfL_bAs0iTCGEk7LhbreWZQ&s"
          />
        </div>
      </div>
      <Overview />
      <DetailedReport />
    </div>
  );
}

export default MainContent;
