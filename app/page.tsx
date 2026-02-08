
import { Hero } from "@/components/home/Hero";
import { NewsSection } from "@/components/home/NewsSection";
import { LiveSection } from "@/components/home/LiveSection";
import { DiscographySection } from "@/components/home/DiscographySection";
import { BiographySection } from "@/components/home/BiographySection";
import { MovieSection } from "@/components/home/MovieSection";
import { GoodsSection } from "@/components/home/GoodsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <NewsSection />
      <BiographySection />
      <DiscographySection />
      <LiveSection />
      <MovieSection />
      <GoodsSection />
    </div>
  );
}
