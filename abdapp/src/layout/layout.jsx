import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Menu from "../components/TopBar.jsx";
import TopBar from "../components/TopBar.jsx";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="body">
      <TopBar/>
      <main className="">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;