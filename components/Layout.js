import Nav from "./Nav";
import Footer from "./Footer";
import ChatSupport from "./ChatSupport";

// All the pages' contents would render in {children}

export default function Layout({ children }) {
  return (
    <>
      <ChatSupport />
      <Nav />
      <main className="grid">{children}</main>
      <Footer />
    </>
  );
}
