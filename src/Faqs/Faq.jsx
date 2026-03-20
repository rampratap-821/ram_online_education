import { useState, useRef } from "react";

const faqData = [
  {
    category: "Purchases & Refunds",
    items: [
      "Why won't my payment go through?",
      "How do I get a refund?",
      "How do I redeem a coupon?",
    ],
  },
  {
    category: "Making Courses",
    items: [
      "Changing account name",
      "How do I unsubscribe from EDUMA e-mails?",
      "How do I change my password?",
    ],
  },
];

function AccordionItem({ question, isOpen, onClick }) {
  const contentRef = useRef(null);

  return (
    <div className="border rounded-md mb-3 bg-white overflow-hidden">
      {/* Header */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-3 text-left hover:bg-gray-50 transition"
      >
        <p className="font-medium text-gray-800">{question}</p>

        {/* Icon */}
        <span
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {/* Animated Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? contentRef.current?.scrollHeight + "px"
            : "0px",
        }}
        className="transition-all duration-300 ease-in-out overflow-hidden px-4"
      >
        <p className="py-2 text-sm text-gray-600">
          This is a sample answer. Replace with real content.
        </p>
      </div>
    </div>
  );
}

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let count = 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-8">FAQs</h1>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-xl font-semibold mb-4">
              {section.category}
            </h2>

            {section.items.map((item, itemIndex) => {
              const currentIndex = count++;
              return (
                <AccordionItem
                  key={itemIndex}
                  question={item}
                  isOpen={openIndex === currentIndex}
                  onClick={() => handleToggle(currentIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;