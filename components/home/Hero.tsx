import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Explore our wide range of products
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground mt-4 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus maxime nemo error excepturi tempore deleniti odio
          magni, fuga sint aliquam.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
