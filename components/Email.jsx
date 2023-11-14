import { PinkButton } from "./PinkButton";

export function Email() {
  return (
    <>
      <div className="email-container">
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="Enter email address"
          style={{ color: "#36536B" }}
        />
        <PinkButton title="Schedule a Demo" />
      </div>

      <style jsx>{`
        .email-container {
          width: 30rem;
          height: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .email {
          background-color: #fbfcfe;
          border-radius: 100px;
          border-style: none;
          margin-right: -6rem;
          padding: 5px;
          outline: none;
          width: 20rem;
          height: 1.5rem;
          box-shadow: 0 8px 6px -6px #36536b;
        }

        @media (min-width: 767px) and (max-width: 1200px) {
          .email-container {
            flex: 0 1 100%;
            margin: 1rem auto;
          }
        }
        @media (max-width: 767px) {
          .email-container {
            flex: 0 1 100%;
            flex-direction: column;
            margin: 1rem auto;
          }
          .email {
            margin: 1rem auto;
            padding: 5px;
            outline: none;
            width: 15rem;
            height: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
