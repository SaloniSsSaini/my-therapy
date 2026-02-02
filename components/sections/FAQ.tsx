import Container from "../layout/Container";
import { faqs } from "@/content/faq";

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-3xl text-center">
          FAQs
        </h2>

        <div className="mt-12 space-y-6 max-w-2xl mx-auto">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-serif">
                {f.question}
              </h3>
              <p className="mt-2 text-sm">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
