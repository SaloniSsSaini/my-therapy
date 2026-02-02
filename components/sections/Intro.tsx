import Container from "../layout/Container";

export default function Intro() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl">
            A space to slow down and reconnect
          </h2>
          <p className="mt-6">
            Therapy offers a supportive environment to explore what feels overwhelming and move toward meaningful change.
          </p>
        </div>
      </Container>
    </section>
  );
}
