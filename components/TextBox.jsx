export function TextBox(props) {
  return (
    <>
      <div className="container">
        <div className="title-container">
          <h6>{props.title}</h6>
        </div>
        <div className="text-container">
          <p>{props.text}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin: 4rem;
          justify-content: center;
          align-items: center;
        }
        .title-container {
          width: 40%;
        }
        .text-container {
          width: 60%;
        }
        h6 {
          font-family: "DM Serif Display";
          font-size: 32px;
          color: #36536b;
        }

        p {
        }

        @media (max-width: 767px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 2rem auto;
          }
          .title-container {
            width: 40%;
          }
          .text-container {
            width: 60%;
          }
        }
      `}</style>
    </>
  );
}
