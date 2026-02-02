import Container from "../layout/Container";
import ImageBlock from "../media/ImageBlock";
import FadeIn from "../ui/FadeIn";
import { therapistProfile } from "@/content/therapist";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-bgMuted"
    >
      <Container>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Therapist Image */}
            <ImageBlock
              src="/images/therapist/maya.png"
              alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
              className="h-[420px]"
            />

            {/* About Content */}
            <div>
              <h2 className="text-3xl md:text-4xl">
                Thoughtful, grounded therapy
              </h2>

              <p className="mt-6 text-base md:text-lg">
                {therapistProfile.idealClients}
              </p>

              <p className="mt-4">
                {therapistProfile.approach.style}
              </p>

              <p className="mt-4 text-sm text-textSecondary">
                Modalities include{" "}
                {therapistProfile.approach.methods.join(", ")}.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
