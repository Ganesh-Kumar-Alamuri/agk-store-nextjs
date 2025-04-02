import { NavLinks } from "@/utils/links"
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "../ui/dropdown-menu"

import { LuAlignLeft } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";
function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="h-6 w-6"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end" sideOffset={10}>
        {NavLinks.map((link)=>{
          return <DropdownMenuItem key={link.href}>
            <Link href={link.href} className="w-full capitalize">
            {link.label}
            </Link>
          </DropdownMenuItem>
        })}
       </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default LinksDropdown