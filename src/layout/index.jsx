import Navbar from "./components/Navbar";

function Layout({ children }) {
  return <Navbar page={children} />;
}

export default Layout;
