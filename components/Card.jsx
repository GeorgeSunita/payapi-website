export function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.logo} alt="logo" />

        <h2> {props.heading}</h2>
        <div className="text"> {props.text}</div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          gap: 20px;
          padding: 2rem;
        }
        img {
          display: block;
          width: 105px;
          height: 105px;
        }

        h2 {
          font-family: Public Sans;
          font-size: 18px;
          font-weight: bold;
          line-height: 5;
          letter-spacing: "-.14px";
          justify-content: space-between;
        }
        .text {
          font-family: Public Sans;
          font-size: 15px;
          font-weight: regular;
          line-height: 1;
          letter-spacing: "-.12px";
          width: 100%;
          text-align: center;
          justify-content: space-between;
        }

        /******media query **************/

        @media (min-width: 767px) and (max-width: 1080px) {
          .card {
            width: 100%;
            flex: 0 1 100%;
            gap: 30px;
          }
          img {
            width: 65px;
            height: 65px;
          }
          h2 {
            font-size: 18px;
            font-weight: bold;
            line-height: 1;
            justify-content: center;
            align-items: center;
          }
          .text {
            font-size: 14px;
          }
        }
        @media (max-width: 767px) {
          .card {
            flex-direction: column;
            flex: 0 1 100%;
            gap: 30px;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
