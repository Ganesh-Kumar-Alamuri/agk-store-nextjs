'use client'
import { SignOutButton } from "@clerk/nextjs"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
function SignOutLink() {
  const {toast} = useToast()
  const handleLogout = ()=>{
    toast({description:'Logout Successfull...'})
  }
  return (
    <SignOutButton>
      <Link href='/' onClick={handleLogout} className="w-full text-left">
      Logout
      </Link>
    </SignOutButton>
  )
}
export default SignOutLink