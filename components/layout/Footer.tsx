import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-borderColor py-12">
      <Container>
        <div className="text-center text-sm text-textSecondary">
          <p className="font-serif text-textPrimary">
            Dr. Maya Reynolds
          </p>

          <p className="mt-2">
            Anxiety & Trauma Therapy · Santa Monica, CA
          </p>

          <p className="mt-4 text-xs">
            © 2026 · All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
