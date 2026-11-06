import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Container className="flex min-h-[70vh] flex-col items-start justify-center pt-24">
        <p className="label">
          <span className="text-human">404</span>
        </p>
        <h1 className="mt-4 font-serif text-5xl text-text sm:text-6xl">This page isn&rsquo;t here.</h1>
        <p className="mt-4 max-w-md text-lg text-text-soft">
          The link may be out of date. The work and contact details are on the home page.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" arrow>
            Back to home
          </ButtonLink>
        </div>
      </Container>
      <Footer />
    </>
  );
}
