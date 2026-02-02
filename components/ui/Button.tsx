type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 text-sm transition border";

  const styles = {
    primary:
      "border-borderColor hover:bg-textPrimary hover:text-white",
    secondary:
      "bg-bgMuted border-borderColor hover:bg-textPrimary hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
