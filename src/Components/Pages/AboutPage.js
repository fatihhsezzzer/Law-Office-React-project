import React from "react";

import PageTitle from "../SingleComponents/PageTitle";
import AboutPageHelpArea from "../SingleComponents/AboutPageHelpArea";
import ExpertiseArea from "../SingleComponents/AboutPageExpertiseArea";
import HistoryArea from "../SingleComponents/History";

export default function AboutPage() {
  return (
    <div>
      <PageTitle title="about"></PageTitle>
      <AboutPageHelpArea></AboutPageHelpArea>
      <ExpertiseArea></ExpertiseArea>
      <HistoryArea></HistoryArea>
    </div>
  );
}
