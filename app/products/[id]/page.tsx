import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import ReviewCard from "@/components/reviews/ReviewCard";
import ProductReview from "@/components/reviews/ProductReviews";
import SubmitReview from "@/components/reviews/SubmitReview";
import ProductReviews from "@/components/reviews/ProductReviews";
import { auth } from "@clerk/nextjs/server";
async function SingleProduct({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, price, description, image, company } = product;
  const dollarAmount = formatCurrency(price);
  const {userId} = auth()
  const reviewDoesNotExist = userId&&!(await findExistingReview(userId,product.id))
  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="grid lg:grid-cols-2 lg:gap-x-16 mt-6 gap-y-8">
        {/* Image Div */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="rounded object-cover w-full"
          />
        </div>
        {/* Product Info Div */}
        <div>

        <div className="flex items-center gap-x-8">
          <h1 className="capitalize text-3xl font-bold">{name}</h1>
          <div className="flex items-center justify-center gap-x-2">

          <FavoriteToggleButton productId={params.id} />
          <ShareButton productId={params.id} name={product.name}/>
          </div>
        </div>
        <ProductRating productId={params.id} />
        <h4 className="mt-2 text-xl">{company}</h4>
        <p className="mt-3 bg-muted text-md inline-block p-2 rounded">
          {dollarAmount}
        </p>
        <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
        <AddToCart productId={params.id} />
        </div>
        {/* <ReviewCard/> */}
      </div>
      <ProductReviews productId={product.id}/>
      {
        reviewDoesNotExist&&
      <SubmitReview productId={product.id}/>
      }
    </section>
  );
}
export default SingleProduct;
