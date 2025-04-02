import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import UserIcon from "./UserIcon";
import { Suspense } from "react";
function NavBar() {
  return (
    <nav>
      <Container className="border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <DarkMode />
          <CartButton />

          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default NavBar;
