import React from "react";
import Banner from "../SingleComponents/Banner";
import ExpertiseArea from "../SingleComponents/ExpertiseArea";
import PortfolioArea from "../SingleComponents/PortfolioArea";
import PracticeArea from "../SingleComponents/PracticeArea";
import HelpArea from "../SingleComponents/HelpArea";
import TeamArea from "../SingleComponents/TeamArea";
import ContactForm from "../SingleComponents/ContactForm";
import BlogArea from "../SingleComponents/BlogsSlider";

export default function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <HelpArea></HelpArea>
      <PracticeArea></PracticeArea>
      <ExpertiseArea></ExpertiseArea>
      <TeamArea></TeamArea>
      <ContactForm></ContactForm>
    </div>
  );
}
