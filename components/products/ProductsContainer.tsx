import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

async function ProductsContainer({layout,search}:{layout:string,search:string}) {
  const products  = await fetchAllProducts({search})
  const productLen = products.length
  const searchString = search ? `&search=${search}` : '';
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {productLen} product{productLen > 1 ? "s" : ""}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchString}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchString}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4"/>
      </section>
      <div>
        {productLen === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, No products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;
