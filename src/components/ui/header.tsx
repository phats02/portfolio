import Breadcrumb from "../header/breadcrumb";
import Nav from "../header/nav";

const Header = (): JSX.Element => {
  return (
    <nav className="my-4 w-full flex items-center justify-between px-8 max-md:text-sm sticky top-0 z-50 backdrop-blur-md h-16">
      <Breadcrumb />
      <Nav />
    </nav>
  );
};

export default Header;
