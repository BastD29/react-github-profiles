import { FC, Suspense } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";
import Footer from "../Footer/Footer";

const Layout: FC = () => {
  return (
    <div className={style["layout"]}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
