import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>해더</header>
      <main>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
