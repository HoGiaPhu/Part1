import React from "react";

function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <div className="p-4 flex items-center">
        <img
          alt="Logo"
          className="w-10 h-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&s"
        />
        <span className="ml-2 text-xl font-bold">Logo</span>
      </div>
      <nav className="mt-6">
        <a
          className="flex items-center p-2 text-white bg-pink-500 rounded-md"
          href="#"
        >
          <i className="fas fa-th-large"></i>
          <span className="ml-2">Dashboard</span>
        </a>
        <a
          className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-200 rounded-md"
          href="#"
        >
          <i className="fas fa-folder"></i>
          <span className="ml-2">Projects</span>
        </a>
        <a
          className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-200 rounded-md"
          href="#"
        >
          <i className="fas fa-users"></i>
          <span className="ml-2">Teams</span>
        </a>
        <a
          className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-200 rounded-md"
          href="#"
        >
          <i className="fas fa-chart-line"></i>
          <span className="ml-2">Analytics</span>
        </a>
        <a
          className="flex items-center p-2 mt-2 text-white bg-pink-200 rounded-md"
          href="#"
        >
          <i className="fas fa-comments"></i>
          <span className="ml-2">Messages</span>
        </a>
        <a
          className="flex items-center p-2 mt-2 text-gray-600 hover:bg-gray-200 rounded-md"
          href="#"
        >
          <i className="fas fa-cogs"></i>
          <span className="ml-2">Integrations</span>
        </a>
      </nav>
      <div className="mt-6 p-4">
        <img
          alt="Illustration"
          className="w-full h-auto"
          src="https://store-images.s-microsoft.com/image/apps.31887.13527552335205219.79bdc359-aeae-43cd-ac4a-a9b8c2321785.972ea833-efd0-4edd-b0dc-20ea591f449f"
        />
        <div className="mt-2 text-center">
          <span className="block text-gray-600">V2.0 is available</span>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
