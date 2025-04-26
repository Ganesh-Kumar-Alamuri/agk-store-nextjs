import { Skeleton } from "../ui/skeleton";

export function LoadingTable({
  rows = 5,
  columns = 4,
}: {
  rows?: number;
  columns?: number;
}) {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div className='mb-4' key={index}>
        <div className="flex items-center space-x-4">

        <TableRow columns={columns}/>
        </div>
      </div>
    );
  });
  return <>{tableRows}</>;
  
}
export function TableRow({ columns = 4 }: { columns?: number }) {
  const tableRow = Array.from({ length: columns }, (_, i) => {
    return <Skeleton className="w-full h-6" key={i} />;
  });
  return <>{tableRow}</>;
}
