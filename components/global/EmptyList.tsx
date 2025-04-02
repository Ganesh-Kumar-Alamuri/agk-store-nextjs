import { cn } from "@/lib/utils";

function EmptyList({
  text = "No Items Found",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return <h2 className={cn("text-xl", className)}>{text}</h2>;
}
export default EmptyList;
