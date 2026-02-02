import Container from "../layout/Container";
import FadeIn from "../ui/FadeIn";
import { services } from "@/content/services";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-bgMain"
    >
      <Container>
        <FadeIn>
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto text-slate-200">
            <h2 className="text-3xl md:text-4xl text-white">
              Areas of Support
            </h2>

            <p className="mt-4 text-base md:text-lg text-slate-300">
              Support that meets you where you are —
              thoughtfully and at your own pace.
            </p>
          </div>

          {/* Services cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((s) => (
              <div
                key={s.title}
                className="
                  rounded-xl
                  border border-borderColor
                  bg-white
                  p-8
                  text-center
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <h3 className="text-xl md:text-2xl text-textPrimary">
                  {s.title}
                </h3>

                <p className="mt-4 text-sm md:text-base text-textSecondary">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Soft mid-page CTA */}
          <div className="mt-20 text-center text-slate-300">
            <p className="text-sm">
              Not sure where to begin?
            </p>

            <a
              href="#contact"
              className="
                inline-block
                mt-4
                rounded-full
                border border-borderColor
                px-8 py-4 sm:py-3
                text-base sm:text-sm
                bg-white
                text-textPrimary
                hover:bg-[rgb(var(--color-accent))]
                hover:text-white
                transition-all duration-300
              "
            >
              Schedule a Consultation
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
