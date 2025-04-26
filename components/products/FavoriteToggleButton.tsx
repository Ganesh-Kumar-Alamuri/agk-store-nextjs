import { BsHeart } from "react-icons/bs"
import { Button } from "../ui/button"
import { auth } from "@clerk/nextjs/server"
import { fetchFavoriteId } from "@/utils/actions"
import { CardSignInButton } from "../form/Buttons"
import FavoriteToggleForm from "./FavoriteToggleForm"

async function FavoriteToggleButton({productId}:{productId:string}) {
  const {userId} = auth()
  if(!userId) return <CardSignInButton/>
  const favoriteId = await fetchFavoriteId(productId)

  return (
    <FavoriteToggleForm favoriteId={favoriteId} productId={productId}/>
  )
}
export default FavoriteToggleButton