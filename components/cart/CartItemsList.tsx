'use client'
import { CartItemWithProduct } from "@/utils/types";
import { Card } from "../ui/card";
import { FirstColumn, FourthColumn, SecondColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div>
      {cartItems.map((item: CartItemWithProduct) => {
        const { id, amount } = item;
        const { name, company, image, price, id: productId } = item.product;
        return (
          <Card
            className="flex flex-col md:flex-row gap-4 p-6 flex-wrap mb-8"
            key={id}
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} productId={productId} company={company} />
            <ThirdColumn quantity={amount} id={id} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
