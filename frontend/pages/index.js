import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <>
      <main>
        <HeroBanner />
        <Wrapper>
          {/* Heading and Paragraph Start */}
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] ">
            <div className="text-[28px] mb-5 font-semibold leading-right md:text-[34px]">
              Cushioning Your Miles
            </div>
            <div className="text-md md:text-xl">
              A lightweight Nike zoomX midsole is combined with increased stack
              heights to help provide cushioning during extended stretches of
              running.
            </div>
          </div>
          {/*  Heading and paragraph start */}
        </Wrapper>
      </main>
    </>
  );
}
