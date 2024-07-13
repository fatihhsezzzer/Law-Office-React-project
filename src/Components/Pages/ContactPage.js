import React from "react";

import PageTitle from "../SingleComponents/PageTitle";
import ContactPageForm from "../SingleComponents/ContactPageForm";
import MapArea from "../SingleComponents/MapArea";

export default function ContactPage() {
  return (
    <div>
      <PageTitle title="contact"></PageTitle>
      <ContactPageForm></ContactPageForm>
      <MapArea></MapArea>
    </div>
  );
}
