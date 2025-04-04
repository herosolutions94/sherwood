import { useState } from "react";
import Text from "@/components/text";



export default function FaqSection({faqs}) {
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
          <div className="faq-answer">{openIndex === index && <Text string={faq.answer}/>}</div>
        </div>
        </div>
      ))}
      </div>

  );
}
