"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bt9() {
    return (<div>
        Bt9:
        <br />
        <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer">
            <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span>
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
            <div className="text-gray-100 text-xl">
                <div className="p-2.5 mt-1 flex items-center">
                    <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                    <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
                </div>
                <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-square-pen"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Posts</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-regular fa-image"></i>
                <div className="flex justify-between w-full items-center">
                    <span className="text-[15px] ml-4 text-gray-200 font-bold">media</span>
                </div>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-align-left"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Pages</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-message"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Comments</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-table"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">appearance</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">plugins</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-users"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">user</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-gear"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">settings</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-bars-progress"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">tools</span>
            </div>
            <div className=" p-2.5 mt-20 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-moon"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">light Mode</span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
            </div>
        </div>
    </div>);
}
exports.default = Bt9;
