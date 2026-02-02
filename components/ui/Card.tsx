export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border border-borderColor p-8">
      {children}
    </div>
  );
}
