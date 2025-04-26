"use client";

import { usePathname } from "next/navigation";
import { adminNavLinks } from "@/utils/links";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminNavLinks.map((link) => {
        const isActiveLink = pathname === link.href;
        const varient = isActiveLink ? "secondary" : "ghost";

        return (
          <Button
            variant={varient}
            className="w-full mb-2 capitalize font-normal"
            asChild
            key={link.href}
          >
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          </Button>
        );
      })}
    </aside>
  );
}
export default Sidebar;
