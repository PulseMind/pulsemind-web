export default function Logo({ size }: { size: number }) {
  return (
    <img
      src="/image/BRAND.png"
      alt="Brand"
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}
