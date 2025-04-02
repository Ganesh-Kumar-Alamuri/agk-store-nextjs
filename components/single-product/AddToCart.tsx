import { Button } from "../ui/button"

function AddToCart({productId}:{productId:string}) {
  return <Button size="lg" className="capitalize mt-8">add to cart</Button>;
}
export default AddToCart