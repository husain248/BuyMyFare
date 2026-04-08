export const galleryImgNums = [1, 2, 3, 4, 5, 6, 7] as const;

export type GalleryTickerImage = {
  src: string;
  num: (typeof galleryImgNums)[number];
};

// Triple the array so the infinite ticker has enough items
export const galleryTickerImages: GalleryTickerImage[] = [
  ...galleryImgNums,
  ...galleryImgNums,
  ...galleryImgNums,
].map((num) => ({ src: `/assets/images/gallery/img${num}.png`, num }));

