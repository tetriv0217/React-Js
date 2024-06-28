import { useState } from "react";
const ButtonsPage = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className=" w-full h-screen duration-200  "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => {
              setColor("black");
            }}
            type="button"
            className="rounded-3xl bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Black
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            type="button"
            className="rounded-3xl bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("red");
            }}
            type="button"
            className="rounded-3xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            type="button"
            className="rounded-3xl bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            type="button"
            className="rounded-3xl bg-pink-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          >
            Pink
          </button>
          <button
            type="button"
            onClick={() => {
              setColor("grey");
            }}
            className="rounded-3xl bg-slate-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonsPage;
