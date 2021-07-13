import React from "react";
import * as Animate from "react-reveal";

import LinkButton from "../../../components/elements/LinkButton";

const CTASection = () => {
  return (
    <div className="container mx-auto px-4 bg-white">
      <div className="cta-section relative mb-12 md:mb-16 lg:mb-20 pt-4 pb-4 md:pt-10 md:pb-14 bg-primary rounded-lg ">
        <div className=" px-6 py-14 md:py-20 text-center mx-auto">
          <Animate.Fade bottom>
            <h3 className="font-sans font-semibold text-2xl md:text-4xl lg:text-5xl text-white leading-7 pb-4">
              We’re launching soon!
            </h3>
          </Animate.Fade>
          <Animate.Fade bottom>
            <p className="font-sans text-white text-sm md:text-base">
              Register with us now and get one month free when we launch!
            </p>
          </Animate.Fade>
          <Animate.Fade bottom>
            <div className="mt-6">
              <LinkButton url="/get-started" />
            </div>
          </Animate.Fade>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
