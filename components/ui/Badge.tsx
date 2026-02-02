export default function Badge({
  text,
}: {
  text: string;
}) {
  return (
    <span className="inline-block text-xs border px-3 py-1">
      {text}
    </span>
  );
}
