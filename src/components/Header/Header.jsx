import { Container } from "../Container/Container";
import s from "./Header.module.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Container className={s.header__container}>
          <img src="/src/assets/logo-black 1.png" alt="logo" />
          <nav className={s.nav}>
            <Link to="/">Characters</Link>
            <Link to="/episode">Episodes</Link>
            <Link to="/location" className={s.nav_link}>
              Locations
            </Link>
          </nav>
        </Container>
      </header>
    </>
  );
};
