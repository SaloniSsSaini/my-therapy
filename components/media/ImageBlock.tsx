import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export default function ImageBlock({ src, alt, className = "" }: Props) {
  return (
    <div
      className={`
        relative
        w-full
        overflow-hidden
        rounded-xl
        bg-bgMain
        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
