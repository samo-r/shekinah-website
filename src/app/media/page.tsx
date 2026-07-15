import { HeroSlideshow } from "@/components/shared/HeroSlideshow";
import { MediaGalleryClient } from "@/components/media/MediaGalleryClient";
import { HERO_SLIDES } from "@/lib/constants";
import { fetchGalleryImages } from "@/app/actions/gallery";

export const revalidate = 0;

export default async function MediaPage() {
  const images = await fetchGalleryImages();

  return (
    <>
      <HeroSlideshow
        images={HERO_SLIDES}
        title="Life at Shekinah"
        centered
      />
      <MediaGalleryClient initialImages={images} />
    </>
  );
}
