import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default Layout;
