import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

interface SanityImageSource {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export function urlForImage(source: SanityImageSource | undefined | null) {
  if (!source?.asset) {
    return null;
  }
  return builder.image(source);
}

export function getImageDimensions(source: SanityImageSource) {
  if (!source?.asset?._ref) {
    return { width: 0, height: 0, aspectRatio: 1 };
  }

  // Extract dimensions from asset reference
  // Format: image-{id}-{width}x{height}-{format}
  const ref = source.asset._ref;
  const dimensions = ref.split("-")[2];
  const [width, height] = dimensions.split("x").map(Number);
  const aspectRatio = width / height;

  return { width, height, aspectRatio };
}
