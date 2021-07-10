import React from "react";
import Container from "../../blocks/Container";
import Footer from "../footer";

const MainWrapper = (props) => {
  return (
    <Container hasMainContainer={props.hasMainContainer}>
      <main>{props.children}</main>
      <Footer hasMainContainer={props.hasMainContainer} />
    </Container>
  );
};

export default MainWrapper;
