import React from "react";
import * as Animate from "react-reveal";

import LinkButton from "../../../components/elements/LinkButton";
import RoutingImag from "../../../assets/images/png/routing.png";
import Header from "../../../components/layout/header";

const TopSection = () => {
  return (
    <div className="bg-primary top-section-bg">
      <div className="container mx-auto px-4 relative ">
        <Animate.Fade bottom>
          <Header />
        </Animate.Fade>
        <div className="relative mb-12 md:mb-16 lg:mb-20">
          <div className="w-full md:w-10/12 lg:w-7/12 text-center mx-auto pt-14">
            <Animate.Fade bottom>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight"
                data-scroll
              >
                Automate and scale your logistics operations
              </h1>
            </Animate.Fade>

            <Animate.Fade bottom>
              <p className="text-base text-white mt-6 w-10/12 mx-auto">
                RouteLift offers the best delivery experience, route planning and
                optimization technology including data insights from your day-to-day
                activities.
              </p>
            </Animate.Fade>

            <div className="mt-6">
              <Animate.Fade bottom>
                <LinkButton url="/get-started" />
              </Animate.Fade>
            </div>
          </div>

          <div className="mt-14">
            <Animate.Fade bottom>
              <img src={RoutingImag} width="100%" alt="Map" />
            </Animate.Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
