import { useEffect, useState } from "react";
import Yek from "./countersub/Yek";
import Do from "./countersub/Do";
import Se from "./countersub/Se";

const Counter = () => {
  const [comp, setComp] = useState(<Yek />);
  const [rennum, setRennum] = useState(0);
  ////////
  useEffect(() => {
    setRennum(rennum + 1);
  }, [comp]);

  return (
    <div className="bg-gray-500 h-[50vh] font-bold text-2xl flex gap-8">
      <ul className="flex flex-col gap-4">
        <li
          onClick={() => setComp(<Yek />)}
          className="border-2 border-white p-2 cursor-pointer"
        >
          yek
        </li>
        <li
          onClick={() => setComp(<Do />)}
          className="border-2 border-white p-2 cursor-pointer"
        >
          do
        </li>
        <li
          onClick={() => setComp(<Se />)}
          className="border-2 border-white p-2 cursor-pointer"
        >
          se
        </li>
      </ul>
      <div className="flex justify-center items-center w-[70%]">{comp}</div>
      <div>{rennum}</div>
    </div>
  );
};

export default Counter;
