import Container from "../layout/Container";
import { heroContent } from "@/content/hero";

export default function Hero() {
  return (
    <section id="home" className="py-32">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl leading-[1.1]">
  {heroContent.heading}
</h1>


          <h1 className="text-5xl md:text-7xl leading-[1.1]">
            {heroContent.heading}
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg">
            {heroContent.subtext}
          </p>

          <a
            href={heroContent.cta.href}
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
            {heroContent.cta.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
