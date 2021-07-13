import React from "react";
import * as Animate from "react-reveal";

import SmileSvg from "../../../assets/images/svg/smile.svg";
import AngrySvg from "../../../assets/images/svg/angry.svg";

const Card = ({value, isSmile}) => {
  return (
    <div className="flex flex-wrap justify-start items-start relative w-full">
      <div className="w-2/12 pb-2 md:pb-0">
        <img src={isSmile ? SmileSvg : AngrySvg} className="w-7 md:w-10 xl:w-12" alt="" />
      </div>
      <div className="w-10/12 px-2">
        <p className="text-sm md:text-base">{value}</p>
      </div>
    </div>
  );
};

const Grid = ({title, list, bgColor, isSmile, titleColor}) => {
  return (
    <div
      className={`py-20 pb-28 px-8 md:px-14 lg:px-12 xl:px-20  ${
        bgColor || "bg-white text-primary"
      }`}
    >
      <div className="text-center mb-10">
        <h4
          className={`text-2xl lg:text-3xl font-semibold ${titleColor || "text-white"} `}
        >
          {title}
        </h4>
      </div>
      <div className="space-y-10 md:space-y-14">
        {list?.map((a, index) => (
          <Animate.Fade left={!isSmile && true} right={isSmile && true}>
            <Card key={index} value={a} isSmile={isSmile} />
          </Animate.Fade>
        ))}
      </div>
    </div>
  );
};

const ModelSection = () => {
  const leftList = [
    "It takes a long time to plan delivery routes using navigation apps or spreadsheets.",
    "Using a variety of tools to arrange routes for many drivers, such as Google Maps and phone calls, feels chaotic and cluttered.",
    "An unexpected surge in orders means long, stressful hours attempting to keep track of all the deliveries.",
    "Like a cable business, you're forced to give your consumers extended time frames.",
    "Route planning takes so much time that you can't focus on the rest of your business as much as you'd like.",
    "You're not sure if your route makes the most use of your drivers' time.",
    "Customers phone to inquire about the status of their delivery, but you don't know where the driver is, so you can't respond.",
  ];

  const rightList = [
    "In just a few minutes, you can plan, optimize, dispatch, and track your delivery!",
    "With a cup of coffee and no stress, plan multi-stop journeys in minutes.",
    "As your company grows, you may easily scale your distribution operations.",
    "Optimize routes based on real-world conditions such as lunch breaks, driver sick days, and schedule constraints.",
    "You'll have time to finish the rest of your work.",
    "You'll save money on fuel and labor.",
    "There will be no more needless customer service calls.",
  ];

  return (
    <div className="container mx-auto px-4 bg-white relative">
      <div className="relative mb-12 md:mb-16 lg:mb-20 pt-2 pb-4 md:pt-10 md:pb-14 bg-white">
        <div className="pt-6 lg:pb-20 text-center mx-auto w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
          <Animate.Fade bottom>
            <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl goodbye-text">
              Goodbye, manual delivery routing, Hello, RouteLift
            </h3>
          </Animate.Fade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:px-4 lg:px-6 lg:gap-6">
          <Grid
            title="The Traditional Way"
            list={leftList}
            isSmile={false}
            titleColor="text-black"
          />
          <Grid
            title="The RouteLift Way"
            list={rightList}
            bgColor=" bg-primary model-left-bg text-white"
            isSmile={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelSection;
