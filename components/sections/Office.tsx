import Container from "../layout/Container";
import ImageBlock from "../media/ImageBlock";
import { therapistProfile } from "@/content/therapist";

export default function Office() {
  return (
    <section id="office" className="py-24 bg-bgMuted">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl">
            A Calm Space for Healing
          </h2>

          <p className="mt-6">
            {therapistProfile.officeDescription}
          </p>

          <p className="mt-2 text-sm text-textSecondary">
            Located at {therapistProfile.location.address}
          </p>
        </div>

        {/* Office Images – ONLY 2 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageBlock
            src="/images/office/office-1.jpg"
            alt="Therapy office interior in Santa Monica"
            className="h-[280px]"
          />

          <ImageBlock
            src="/images/office/office-2.jpg"
            alt="Private counseling room with natural light"
            className="h-[280px]"
          />
        </div>
      </Container>
    </section>
  );
}
