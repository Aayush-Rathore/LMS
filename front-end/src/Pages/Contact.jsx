import React from "react";
import Logo from "../assets/aalogo.png"
import ContactForm from "@/Components/ContactForm";

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
      <h1 className="text-3xl font-semibold text-center">Contact Form</h1>
      <div className="flex flex-col md:flex-row justify-center items-center m-5"> 
        <div className="w-full md:w-[50%]">
          <img src={Logo} alt="Logo" className="aspect-square m-auto" />
        </div>
        <div className="w-full md:w-[50%]">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
