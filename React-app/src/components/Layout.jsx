

import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link to="">HTML</Link>
          <Link to="">CSS</Link>
          <Link to="">JavaScript</Link>
          <Link to="">React</Link>
          <Link to="">Sanity and headless CMS</Link>
        </nav>
      </header>
      {children}
      <footer>
        <p>Ressursarkiv 2025</p>
      </footer>
    </>
  );
}

