import React from "react";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="px-6 py-12 flex justify-center">
      <div className="p-8 w-full max-w-3xl">
        <SectionHeading
          title="Contact Me"
          subtitle="Feel free to reach out for collaborations or just a friendly hello!"
        />
        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
