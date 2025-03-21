import { useState } from "react";

const faqs = [
  {
    question: "How To Purchase The Tickets For Groups?",
    answer: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
  },
  {
    question: "What Equipment Do I Need For Golfing?",
    answer: "You will need golf clubs, golf balls, a golf bag, and appropriate attire including gloves and shoes.",
  },
  {
    question: "Does Practicing Golf At Home Actually Work?",
    answer: "Yes! Practicing putting, swing mechanics, and drills at home can significantly improve your game.",
  },
  {
    question: "How To Purchase The Tickets For Groups?",
    answer: "Yes! Practicing putting, swing mechanics, and drills at home can significantly improve your game.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex faq_blc">
 
      {faqs.map((faq, index) => (
               <div className="col">
        <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
          <div className="faq-question" onClick={() => toggleFaq(index)}>
          <span className="icon">
              {openIndex === index ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="2" fill="black" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="2" fill="black" />
                  <rect x="11" y="5" width="2" height="14" fill="black" />
                </svg>
              )}
            </span>
            <h3>{faq.question}</h3>
          </div>
          <div className="faq-answer">{openIndex === index && <p>{faq.answer}</p>}</div>
        </div>
        </div>
      ))}
      </div>

  );
}
