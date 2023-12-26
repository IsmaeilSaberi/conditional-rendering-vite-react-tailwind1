import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <nav>
      <ul className="bg-red-200 h-10 flex gap-6">
        <Link to="/" className="text-lg font-bold cursor-pointer">
          Home
        </Link>
        <Link to="/counter" className="text-lg font-bold cursor-pointer">
          Counter
        </Link>
        <Link to="/about" className="text-lg font-bold cursor-pointer">
          About
        </Link>
      </ul>
    </nav>
  );
};

export default NavComp;
