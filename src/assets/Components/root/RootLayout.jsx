import NavTop from "../NavTop";
import FooterBottom from "../FooterBottom";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavTop/>
      <Outlet />
      <FooterBottom />
    </>
  );
};

export default RootLayout;
