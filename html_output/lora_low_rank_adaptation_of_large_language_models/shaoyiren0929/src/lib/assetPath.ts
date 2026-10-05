/**
 * Keep externally hosted and embedded images unchanged, while converting
 * site-root local paths to paths relative to the deployed tutorial folder.
 */
export function resolveImageSrc(src: string): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(src)) return src;
  return src.startsWith('/') ? `.${src}` : src;
}
