import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

function SignOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function signOut() {
    await axios.get("http://localhost:4000/auth/logout");
    await getLoggedIn();
    navigate("/");
  }
  return (
    <div className="statistic-one">
      <Link className="link-tre" to="/product">
        Product
      </Link>
      <Link className="link-tre" to="/statistic">
        Statistics
      </Link>
      <button className="log-btn-two" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

export default SignOutBtn;
