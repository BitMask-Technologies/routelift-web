import React from "react";
import MainWrapper from "../../components/layout/mainWrapper";
import CTASection from "./components/CTASection";
import ModelSection from "./components/ModelSection";
import TopSection from "./components/TopSection";
import WhyRouteLiftSection from "./components/WhyRouteLiftSection";

const Home = () => {
  return (
    <MainWrapper hasMainContainer={false}>
      <TopSection />
      <WhyRouteLiftSection />
      <ModelSection />
      <CTASection />
    </MainWrapper>
  );
};

export default Home;
