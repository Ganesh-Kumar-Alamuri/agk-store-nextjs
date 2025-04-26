import SectionTitle from "@/components/global/SectionTitle"
import ProductsGrid from "@/components/products/ProductsGrid"
import { fetchFavoriteProducts } from "@/utils/actions"

async function FavouritesPage() {
  const favorites = await fetchFavoriteProducts()
  if(favorites.length===0)
    return <SectionTitle title="No Favourites Available" />
  return (
    <div>
      <SectionTitle title="Favorite Products"/>
      <ProductsGrid products={favorites.map((favorite)=>favorite.product)}/>
    </div>
  )
}
export default FavouritesPage