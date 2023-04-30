import { Input } from "../ui/Input";
import Logo from "../ui/Logo";
import User from "./user";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-10 px-48 py-6">
      <Logo />
      <Input className="w-64" placeholder="Search" />
      <User />
    </nav>
  );
};

export default Navbar;
