import Breadcrumb from "../header/breadcrumb";
import Nav from "../header/nav";

const Header = (): JSX.Element => {
  return (
    <nav className="relative my-4 w-full flex items-center justify-between px-8 max-md:text-sm">
      <Breadcrumb />
      <Nav />
    </nav>
  );
};

export default Header;
