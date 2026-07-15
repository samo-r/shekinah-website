"use server";

import { v2 as cloudinary } from "cloudinary";
import {
  MEDIA_CATEGORY_FOLDERS,
  type MediaCategory,
} from "@/lib/data";

export type GalleryImage = {
  id: string;
  publicId: string;
  category: MediaCategory;
};

function getCloudinaryConfig() {
  const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim();
  const api_key = process.env.CLOUDINARY_API_KEY?.trim();
  const api_secret = process.env.CLOUDINARY_API_SECRET?.trim();
  return { cloud_name, api_key, api_secret };
}

/**
 * Parent Media Library folder.
 * Must be the Cloudinary folder path (e.g. "shekinah"), NOT "Home/shekinah".
 */
function getGalleryRoot() {
  const raw = process.env.CLOUDINARY_GALLERY_ROOT?.trim() || "shekinah";
  // Users sometimes copy the Media Library breadcrumb "Home/shekinah"
  return raw.replace(/^Home\//i, "");
}

async function fetchFolder(
  folderPath: string,
  category: MediaCategory,
): Promise<GalleryImage[]> {
  try {
    // Use asset-folder API — Media Library folders do NOT always rewrite public_id paths
    const result = await cloudinary.api.resources_by_asset_folder(folderPath, {
      resource_type: "image",
      max_results: 100,
    });

    const resources = (result.resources ?? []) as { public_id: string }[];
    return resources.map((resource) => ({
      id: `${category}:${resource.public_id}`,
      publicId: resource.public_id,
      category,
    }));
  } catch (error) {
    console.warn(
      `[gallery] Failed to fetch asset folder "${folderPath}":`,
      error instanceof Error ? error.message : error,
    );
    return [];
  }
}

/**
 * Fetch gallery images from Cloudinary Media Library folders.
 */
export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  const { cloud_name, api_key, api_secret } = getCloudinaryConfig();

  if (!cloud_name || !api_key || !api_secret) {
    console.warn(
      "[gallery] Missing Cloudinary env vars — returning empty gallery.",
    );
    return [];
  }

  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
    secure: true,
  });

  const root = getGalleryRoot();
  const categories = Object.entries(MEDIA_CATEGORY_FOLDERS) as [
    MediaCategory,
    string,
  ][];

  const batches = await Promise.all(
    categories.map(([category, folderName]) =>
      fetchFolder(`${root}/${folderName}`, category),
    ),
  );

  const images = batches.flat();

  if (images.length === 0) {
    console.warn(
      `[gallery] No images found under Media Library folders "${root}/{school|students|events|cocurricular}".`,
    );
  } else {
    console.log(`[gallery] Loaded ${images.length} images from "${root}/*"`);
  }

  return images;
}
