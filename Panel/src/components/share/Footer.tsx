import { BsPlusCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
    {/* TODO REFACTOR */}

       {location.pathname !== "/transaction" ? (
        <div className="text-indigo-600 text-5xl absolute bottom-8 right-6">
          <Link to="/transaction">
            <BsPlusCircleFill />
          </Link>
        </div>
      ) : null} 
     
    </>
  );
};

export default Footer;
