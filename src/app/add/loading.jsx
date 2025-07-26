import React from "react";

function loading() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-8 border-t-blue-500 border-t-solid border-gray-200 rounded-full animate-spin"></div>
        <div className="mt-4 text-lg text-gray-600">
          Loading, please wait...
        </div>
      </div>
    </div>
  );
}

export default loading;
