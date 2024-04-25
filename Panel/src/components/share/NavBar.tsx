import { FC } from "react";
import { PiCirclesFourFill } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import UserInfo from "../home-page/UserInfo";

const NavBar: FC = () => {
  const location = useLocation();

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.icon}>
          <Link to="/">
            <PiCirclesFourFill />
          </Link>
        </div>
        {location.pathname === "/" ? <UserInfo /> : null}
      </section>
    </>
  );
};

export default NavBar;
