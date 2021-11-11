import React from "react";
import {
  TeliaTextSpacing,
  TeliaHeading,
  TeliaP,
  TeliaButton,
  TeliaHeroBanner,
} from "@teliads/components/react";

const Hero = ({ image, title, content }) => (
  <div className="heroContainer">
    <TeliaHeroBanner imgSrc={image}>
      <TeliaTextSpacing>
        <TeliaHeading tag="h1" variant="title-500">
          {title}
        </TeliaHeading>
        <TeliaP variant="preamble-100">{content}</TeliaP>
        <TeliaButton variant="primary" href="#">
          ORDER NOW{" "}
        </TeliaButton>
      </TeliaTextSpacing>
    </TeliaHeroBanner>
  </div>
);

export default heroComp;