export function PricingCard(props) {
  return (
    <>
      <div className="container">
        <h4>{props.heading}</h4>
        <div className="pricing-description">
          <p>{props.pricingtext}</p>
        </div>
        <div className="amount">{props.amount}</div>
        <hr></hr>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          flex: 0 0 33.3%;
        }
        ul li:before {
          content: " ";
          display: block;
          background-image: url("../assets/shared/desktop/icon-check.svg");
          background-repeat: no-repeat;
          width: 2rem;
          height: 2rem;
        }
      `}</style>
    </>
  );
}
