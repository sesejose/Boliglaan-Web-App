import Nav from "./Nav";
import Footer from "./Footer";

// All the pages' contents would render in {children}

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="grid">{children}</main>
      <Footer />
    </>
  );
}
