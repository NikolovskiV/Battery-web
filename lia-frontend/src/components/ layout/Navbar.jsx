import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import Logo from "../../assets/images/logo.png";
import AuthContext from "../../context/AuthContext";
import SignOutBtn from "../auth/SignOutBtn";

export default function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className={Styles.mainHeader}>
      <div className={Styles.mainHeader_icon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={Styles.mainHeader_imgContainer}>
        <Link className={Styles.mainHeader_link} to="/">
          <img
            src={Logo}
            alt="Logo GPBM industry"
            className={Styles.mainHeader_img}
          />
        </Link>
      </div>
      {loggedIn === false && (
        <>
          <ul className={Styles.mainHeader_menu}>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Home
              </Link>
            </li>

            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Products
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Our services
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                Contact us
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/">
                About us
              </Link>
            </li>
            <li className={Styles.mainHeader_item}>
              <Link className={Styles.mainHeader_link} to="/login">
                Log In
              </Link>
            </li>
          </ul>
        </>
      )}
      {loggedIn === true && (
        <>
          <SignOutBtn />
        </>
      )}
    </div>
  );
}
