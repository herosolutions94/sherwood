import CountUp from "react-countup";

const CounterSection = () => {
  return (
    <section id="counter">
      <div className="contain">
        <div className="flex">
          <div className="col1">
            <h2><CountUp end={18} duration={4} /></h2>
            <p>Hole</p>
          </div>
          <div className="col1">
            <h2><CountUp end={71} duration={4} /></h2>
            <p>Par</p>
          </div>
          <div className="col1">
            <h2><CountUp end={5857} duration={4} /></h2>
            <p>Yards</p>
          </div>
          <div className="col1">
            <h2><CountUp end={70.0} duration={4} decimals={1} /></h2>
            <p>Rating</p>
          </div>
          <div className="col1">
            <h2><CountUp end={139} duration={4} /></h2>
            <p>Slope</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
