import { Link } from "react-router-dom";
import Nav from "./Nav";
import PageTitle from "./PageTitle";

export default function Layout({ children, category }) {
  return (
    <>
      <header></header>
      <Nav />
      <main>
        <PageTitle title={category} />
        {children}
      </main>
    </>
  );
}