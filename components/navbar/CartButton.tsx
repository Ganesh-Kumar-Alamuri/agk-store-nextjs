import Link from "next/link";
import { Button } from "../ui/button";
import { BsCart4 } from "react-icons/bs";
import { fetchCartItems } from "@/utils/actions";
async function CartButton() {
  const numItems = await fetchCartItems();
  return (
    <Button
      asChild
      size="icon"
      variant="outline"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <BsCart4 className="h-6 w-6" />
        <span className="rounded-full -top-3 -right-3 absolute bg-primary flex text-white h-6 w-6 items-center justify-center text-xs ">
          {numItems}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
