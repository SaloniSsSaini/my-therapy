import Container from "../layout/Container";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-28 bg-bgMuted text-center"
    >
      <Container>
        <h2 className="text-3xl md:text-4xl">
          Take the first step — gently
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-base md:text-lg">
          Reaching out doesn’t mean committing to anything.
          It’s simply a space to talk and see if this feels right.
        </p>

        <a
          href="#home"
          className="
            inline-block
            mt-10
            rounded-full
            border border-borderColor
            px-8 py-4 sm:py-3
            text-base sm:text-sm
            bg-white
            hover:bg-[rgb(var(--color-accent))]
            hover:text-white
            transition-all duration-300
          "
        >
          Book a Consultation
        </a>

        <p className="mt-4 text-xs text-textSecondary">
          In-person and online sessions available
        </p>
      </Container>
    </section>
  );
}
