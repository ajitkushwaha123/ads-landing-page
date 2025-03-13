"use client";
import React, { useState } from "react";
import Title from "./Title";
import { SpotlightBackground } from "./ui/SpotlightBackground";

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section
      id="faqs"
      className="py-10 border-b-4 text-white border-primary sm:py-12 lg:py-20 bg-black relative overflow-hidden"
    >
      <SpotlightBackground />
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <Title preTitle={"Frequently"} title={"Asked Question"} />
        <div className="max-w-5xl mx-auto mt-8 space-y-6 md:mt-16">
          {[
            {
              id: "question1",
              question: "What is MagicScale, and what services do you offer?",
              answer:
                "MagicScale is a restaurant consultancy company specializing in onboarding restaurants to platforms like Swiggy and Zomato. We also assist with obtaining FSSAI licenses and providing tailored solutions for restaurant owners.",
            },
            {
              id: "question2",
              question:
                "How does the onboarding process work for Swiggy and Zomato?",
              answer:
                "We handle the entire process, including account setup, menu uploads, pricing configuration, and profile optimization, ensuring your restaurant goes live quickly and seamlessly.",
            },
            {
              id: "question3",
              question: "What is an FSSAI license, and why is it important?",
              answer:
                "An FSSAI license is mandatory for any food business in India. It ensures compliance with food safety standards, builds customer trust, and avoids legal complications. MagicScale simplifies the application process for you.",
            },

            {
              id: "questione4",
              question:
                "How long does it take to get onboarded to Swiggy or Zomato?",
              answer:
                "The onboarding timeline typically ranges from 1-3 working days, depending on the completeness of your documents and the responsiveness of the platform.",
            },
            {
              id: "question5",
              question:
                "What documents are required for onboarding to Swiggy and Zomato?",
              answer:
                "You’ll need your FSSAI license, GST details, a valid ID proof, bank account information, and restaurant details such as the menu and photos.",
            },
            {
              id: "question6",
              question: "Can you help if I don’t have an FSSAI license yet?",
              answer:
                "Absolutely! We’ll guide you through the FSSAI license application process and ensure you’re compliant before starting your online journey.",
            },
            {
              id: "question7",
              question: "Do I need to manage technical aspects of onboarding?",
              answer:
                "Not at all! Our team takes care of all technical and operational tasks, making the process hassle-free for you.",
            },
            {
              id: "question8",
              question:
                "Can you help with menu optimization for online platforms?",
              answer:
                "Yes, we can assist with menu structuring and pricing to ensure it appeals to your target audience and aligns with platform best practices.",
            },
            {
              id: "question9",
              question: "How do I get started with MagicScale?",
              answer:
                "Simply reach out to us via our website or contact number, and our team will guide you through the onboarding process.",
            },
          ].map((faq) => (
            <div
              key={faq.id}
              className="transition-all group hover:text-black duration-200 bg-black border border-gray-200 shadow-lg cursor-pointer rounded-md hover:bg-gray-50"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(faq.id)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-white group-hover:text-primary">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transform transition-transform ${
                    openQuestion === faq.id ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === faq.id && (
                <div className="px-4 pb-5 text-white group-hover:text-black sm:px-6 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
