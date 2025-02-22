import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import s from "./Layout.module.css";
import { Outlet, Link } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
