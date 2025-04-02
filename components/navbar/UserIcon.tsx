import { currentUser,auth } from "@clerk/nextjs/server"
import { LuUser2 } from "react-icons/lu"

async function UserIcon() {
  // const {userId} = auth()
  const user = await currentUser()
  const profileImage = user?.imageUrl
  if(profileImage)
    return <img src={profileImage} className="h-6 w-6 object-cover rounded"/>

  return <LuUser2 className="h-6 w-6 rounded-full bg-primary text-white"/>
}
export default UserIcon