export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
