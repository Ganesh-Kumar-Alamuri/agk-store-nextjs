import { formatCurrency } from "@/utils/format"
import { Product } from "@prisma/client"
import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import FavoriteToggleButton from "./FavoriteToggleButton"

function ProductsGrid({products}:{products:Product[]}) {

  return (
    <section className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product)=>{
        const {name,image, description} = product
        const productId = product.id
        const dollarAmount = formatCurrency(product.price)
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="relative transform group-hover:shadow-xl duration-500 transition-shadow">
                <CardContent className="p-4">
                  <div className="relative rounded h-64 md:h-48 overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 duration-500 transition-transform"
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <h2 className="text-lg capitalize">{name}</h2>
                    <p className="text-muted-foreground mt-2">{dollarAmount}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7">
              <FavoriteToggleButton productId={productId}/>
            </div>
          </article>
        );
      })}
    </section>
  )
}
export default ProductsGrid