import Header from "./Header";
import Footer from "./Footer";

// All the pages' contents would render in {children}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="wrapper">{children}</main>
      <Footer />
    </>
  );
}
