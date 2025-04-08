import React from 'react';

function Overview() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 bg-pink-100 rounded-md">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Turnover</span>
          <i className="fas fa-shopping-cart text-pink-500"></i>
        </div>
        <div className="mt-2 text-3xl font-bold">$92,405</div>
        <div className="mt-1 text-green-500">↑ 5.39% period of change</div>
      </div>
      <div className="p-4 bg-blue-100 rounded-md">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Profit</span>
          <i className="fas fa-dollar-sign text-blue-500"></i>
        </div>
        <div className="mt-2 text-3xl font-bold">$32,218</div>
        <div className="mt-1 text-green-500">↑ 5.39% period of change</div>
      </div>
      <div className="p-4 bg-indigo-100 rounded-md">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">New customer</span>
          <i className="fas fa-user-plus text-indigo-500"></i>
        </div>
        <div className="mt-2 text-3xl font-bold">298</div>
        <div className="mt-1 text-green-500">↑ 6.84% period of change</div>
      </div>
    </div>
  );
}

export default Overview;