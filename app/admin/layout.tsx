import { Separator } from "@/components/ui/separator";
import Sidebar from "./sidebar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl text-bold capitalize mb-2">dashboard</h2>
      <Separator className="mt-4" />
      <section className="mt-12 grid lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 gap-x-2">{children}</div>
      </section>
    </>
  );
}
export default DashboardLayout;
