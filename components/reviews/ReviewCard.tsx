import { ReactNode } from "react";
import RatingInput from "./RatingInput";
import { Card, CardContent, CardHeader } from "../ui/card";
import Rating from "./Rating";
import Comment from "./Comment";
import Image from "next/image";
type ReviewInputProps = {
  reviewInfo: {
    comment: string;
    rating: number;
    image: string;
    name: string;
  };
  children?: ReactNode;
};
function ReviewCard({ reviewInfo, children }: ReviewInputProps) {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={reviewInfo.image}
            alt={reviewInfo.name}
            width={48}
            height={48}
            className="rounded-full object-cover w-12 h-12"
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1"></h3>
            <Rating rating={reviewInfo.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
}
export default ReviewCard;
