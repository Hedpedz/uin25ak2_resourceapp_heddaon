import { Link } from "react-router-dom";
import Nav from "./Nav";
import PageTitle from "./PageTitle";
import "../styles/layout.scss";

export default function Layout({ children, category }) {
  return (
    <>
      <header>
        <Link to="/" id="logo">Ressursarkiv</Link>
      </header>
      <Nav />
      <main>
        <PageTitle title={category} />
        {children}
      </main>
    </>
  );
}