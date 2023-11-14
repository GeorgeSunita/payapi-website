import { Navbar } from "../components/Navbar";
import { Title } from "../components/Title";
import { PricingCard } from "../components/PricingCard";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Email } from "../components/Email";
export default function Pricing() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="title-container">
          <Title
            text="Pricing"
            color="#36536B"
            size="56px"
            letterSpace="-.43px"
          />
        </div>

        <div className="card-container">
          <div className="card1">
            <div className="card-heading-container">
              <h6>Free Plan</h6>
            </div>

            <div className="card1-text">
              <p>
                Build and test using our core set of products with up to 100 API
                requests
              </p>
            </div>
            <div className="card1-pricing-box">
              <Title
                text="$0.00"
                color="#36536B"
                size="56px"
                letterSpace="-.43px"
              />
              <div className="line"></div>
            </div>

            <ul className="card1-pricing-plan">
              <li> Transactions</li>
              <li> Auth</li>
              <li>Identity</li>
              <li> Investments</li>
              <li>Assets</li>
              <li>Liabilities</li>
              <li> Income</li>
            </ul>
            <div className="button-container">
              <div className="line"></div>
              <Button title="Request Access" />
            </div>
          </div>

          <div className="card2">
            <div className="card-heading-container">
              <h6>Basic Plan</h6>
            </div>

            <div className="card2-text">
              <p>
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
            </div>
            <div className="card2-pricing-box">
              <Title
                text="$249.00"
                color="#36536B"
                size="56px"
                letterSpace="-.43px"
              />
              <div className="line"></div>
            </div>

            <ul className="card2-pricing-plan">
              <li> Transactions</li>
              <li> Auth</li>
              <li>Identity</li>
              <li> Investments</li>
              <li>Assets</li>
              <li>Liabilities</li>
              <li> Income</li>
            </ul>
            <div className="button-container">
              <div className="line"></div>
              <Button title="Request Access" />
            </div>
          </div>

          <div className="card3">
            <div className="card-heading-container">
              <h6>Premium Plan</h6>
            </div>

            <div className="card3-text">
              <p>
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
            </div>
            <div className="card3-pricing-box">
              <Title
                text="$499.00"
                color="#36536B"
                size="56px"
                letterSpace="-.43px"
              />
              <div className="line"></div>
            </div>
            <ul className="card3-pricing-plan">
              <li> Transactions</li>
              <li> Auth</li>
              <li>Identity</li>
              <li> Investments</li>
              <li>Assets</li>
              <li>Liabilities</li>
              <li> Income</li>
            </ul>
            <div className="button-container">
              <div className="line"></div>
              <Button title="Request Access" />
            </div>
          </div>
        </div>
        <div className="ready-to-start">
          <Title
            text="Ready to start?"
            color="#36536B"
            lineHeight="56"
            size="48px"
            letterSpace="-.37px"
          />
          <Email />
        </div>

        <Footer />
      </div>
      <style jsx>{`
        .main-container {
          width: 65vw;
          height: 70vh;
          margin: 5rem auto;
          background-color: #fbfcfe;
          background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
          background-repeat: no-repeat;
          background-position: top 450% right -35%;
          position: relative;
        }
        .title-container {
          display: flex;
          margin: 0.5rem 7rem;
        }
        h6 {
          color: #ba4270;
          font-family: "DM Serif Display";
          font-size: 32px;
          letter-space: -0.25px;
        }
        .card-container {
          margin: 2rem 4rem;
          display: flex;
        }
        .card1,
        .card2,
        .card3 {
          margin: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .card1-pricing-box,
        .card2-pricing-box,
        .card3-pricing-box {
          width: 100%;
        }
        .card1-text {
          width: 100%;
          font-family: "Public Sans";
        }
        .card1-pricing-plan,
        .card2-pricing-plan,
        .card3-pricing-plan {
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
          justify-content: center;
        }

        .card1-pricing-plan li:not(:nth-child(-n + 3)) {
          margin-left: 2rem;
        }

        .card1-pricing-plan li:nth-child(-n + 3):before {
          content: " ";
          display: inline-block;
          background-image: url("../assets/shared/desktop/icon-check.svg");
          background-repeat: no-repeat;
          width: 1rem;
          height: 1rem;
          padding-right: 1rem;
        }

        .card2-pricing-plan li:not(:nth-child(-n + 5)) {
          margin-left: 2rem;
        }

        .card2-pricing-plan li:nth-child(-n + 5):before {
          content: " ";
          display: inline-block;
          background-image: url("../assets/shared/desktop/icon-check.svg");
          background-repeat: no-repeat;
          width: 1rem;
          height: 1rem;
          padding-right: 1rem;
        }

        .card3-pricing-plan li:not(:nth-child(-n + 7)) {
          margin-left: 2rem;
        }

        .card3-pricing-plan li:nth-child(-n + 7):before {
          content: " ";
          display: inline-block;
          background-image: url("../assets/shared/desktop/icon-check.svg");
          background-repeat: no-repeat;
          width: 1rem;
          height: 1rem;
          padding-right: 1rem;
        }
        .button-container {
          width: 100%;
        }
        .line {
          border-bottom: 1px solid #979797;
          margin: 1rem 0;
        }
        .ready-to-start {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          margin: 1rem;
          width: 65vw;
        }
        .footer-container {
        }

        /******media query **************/

        @media (min-width: 767px) and (max-width: 1200px) {
          .main-container {
            width: 65vw;
            margin: 2rem auto;
            background-image: none;
          }
          h6 {
            font-size: 24px;
            letter-spacing: -0.18px;
          }
          .title-container {
            flex: 0 1 33.3%;
            margin: 0;
          }

          .card-container {
            flex: 0 1 33.3%;
            margin: 0;
          }
          .card1,
          .card2,
          .card3 {
            flex: 0 1 33.3%;
            margin: 0;
          }

          .card1-pricing-plan,
          .card2-pricing-plan,
          .card3-pricing-plan {
            flex: 0 1 33.3%;
            gap: 4px;
          }
        }

        @media (max-width: 767px) {
          .main-container {
            width: 60%;
            margin: 2rem auto;
            background-image: none;
          }
          h6 {
            font-size: 24px;
            letter-spacing: -0.18px;
          }
          .title-container {
            flex: 0 1 33.3%;
            margin: 0;
          }

          .card-container {
            flex: 0 1 33.3%;
            flex-direction: column;
            margin: 0;
          }
          p {
            display: none;
          }
          .ready-to-start {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
