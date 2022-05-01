import React from "react";
import axios from "axios";
import Router from "./Router";
import { AuthContextP } from "./context/AuthContext";


axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextP>
        <Router />
    </AuthContextP>
  );
}

export default App;
