import { HeroSection } from "@/components/shared/HeroSection";
import { MediaGalleryClient } from "@/components/media/MediaGalleryClient";
import { IMGS } from "@/lib/constants";
import { fetchGalleryImages } from "@/app/actions/gallery";

export const revalidate = 0;

export default async function MediaPage() {
  const images = await fetchGalleryImages();

  return (
    <>
      <HeroSection
        img={IMGS.heroPrograms}
        title="Life at Shekinah"
        centered
      />
      <MediaGalleryClient initialImages={images} />
    </>
  );
}
