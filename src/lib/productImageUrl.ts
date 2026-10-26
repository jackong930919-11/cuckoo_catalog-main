const PRODUCT_IMAGE_VERSION = '20261009-2';

export function getProductImageUrl(imageUrl: string): string {
  if (!imageUrl.startsWith('/images/')) return imageUrl;

  const separator = imageUrl.includes('?') ? '&' : '?';
  return `${imageUrl}${separator}v=${PRODUCT_IMAGE_VERSION}`;
}