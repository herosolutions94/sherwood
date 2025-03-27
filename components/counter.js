import CountUp from "react-countup";

const CounterSection = ({ content, sectionPrefix = "sec3" }) => {
  if (!content) return null; // Handle case when content is null

  return (
    <section id="counter">
      <div className="contain">
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => {
            const headingKey = `${sectionPrefix}_heading${i + 2}`;
            const textKey = `${sectionPrefix}_text${i + 2}`;

            return (
              <div className="col1" key={i}>
                <h2>
                  <CountUp end={parseFloat(content[headingKey]) || 0} duration={4} decimals={1} />
                </h2>
                <p>{content[textKey] || "No text available"}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
