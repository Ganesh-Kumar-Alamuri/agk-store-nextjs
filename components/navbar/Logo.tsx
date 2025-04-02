import { IoStorefront } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";
function Logo() {
  return <Button asChild size="icon">
    <Link href="/">
    <IoStorefront className="h-6 w-6"/>
    </Link>
  </Button>;
}
export default Logo;
