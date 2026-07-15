// School logo — file lives at /public/badge.svg
export function Crest({ size = 87 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/badge.svg"
      alt="Shekinah Elementary School"
      width={size}
      height={size}
      className="object-contain flex-shrink-0"
    />
  );
}
