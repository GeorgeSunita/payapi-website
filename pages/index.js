import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { Email } from "../components/Email";
import { Title } from "../components/Title";
import { Logo } from "../components/Logo";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
export default function Home() {
  const logos = [
    {
      i: "0",
      logo: "assets/shared/desktop/tesla.svg",
      className: "white",
    },
    {
      i: "1",
      logo: "assets/shared/desktop/microsoft.svg",
      className: "white",
    },
    {
      i: "2",
      logo: "assets/shared/desktop/hewlett-packard.svg",
      className: "white",
    },
    {
      i: "3",
      logo: "assets/shared/desktop/oracle.svg",
      className: "white",
    },
    {
      i: "4",
      logo: "assets/shared/desktop/google.svg",
      className: "white",
    },
    {
      i: "5",
      logo: "assets/shared/desktop/nvidia.svg",
      className: "white",
    },
  ];

  const data = [
    {
      i: "0",
      logo: "assets/home/desktop/icon-personal-finances.svg",
      heading: "Personal Finances",
      text: "Consolidate financial data from multiple sources and categorize transactions up to 2years of history. Analyze reports to reconcile activities in your account.",
    },
    {
      i: "1",
      logo: "assets/home/desktop/icon-banking-and-coverage.svg",
      heading: "Banking & Coverage",
      text: "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
    },
    {
      i: "2",
      logo: "assets/home/desktop/icon-consumer-payments.svg",
      heading: "Consumer Payments",
      text: "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="header-container">
          <div className="content-container">
            <Title
              text="Start building with our APIs for absolutely free."
              color="black"
              size="72px"
              lineHeight="-.55px"
              letterSpace="0px"
            />
            <Email />
            <p className="text">
              Have any questions?
              <span>
                <em>Contact us.</em>
              </span>
            </p>
          </div>

          <div className="image-container">
            {" "}
            <img
              className="img-content"
              src="../assets/home/desktop/illustration-phone-mockup.svg"
              alt="phone"
            />
          </div>
        </div>
        <div className="client-container">
          <div className="text-container">
            <Title
              text="Who we work with"
              color="#FBFCFE"
              size="48px"
              letterSpace="-.37px"
            />
            <p
              style={{ color: "#FBFCFE", fontSize: "12px", lineHeight: "28px" }}
            >
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <Button title="About us" />
          </div>
          <div className="logo-container">
            {logos.map(function (elem, i) {
              return (
                <Logo
                  key={i}
                  logo={elem.logo}
                  className={elem.className}
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="section-easy-to-implement">
          <div className="img-on-left">
            <img
              className="img-section-easy-to-implement"
              src="../assets/home/desktop/illustration-easy-to-implement.svg"
              alt="code"
            />
          </div>
          <div className="text-right">
            <Title
              text="Easy to implement"
              color="#36536B"
              size="48px"
              letterSpace="-.37px"
            />
            <p>
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="section-simple-ui">
          <div className="text-left">
            <Title
              text="Simple UI & UX"
              color="#36536B"
              size="48px"
              letterSpace="-.37px"
            />
            <p>
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
          <div className="img-right">
            <img
              className="img-section-simple-ui"
              src="../assets/home/desktop/illustration-simple-ui.svg"
              alt="phones"
            />
          </div>
        </div>
        <div className="card-container">
          {data.map(function (elem, i) {
            return (
              <Card
                key={i}
                logo={elem.logo}
                heading={elem.heading}
                text={elem.text}
              />
            );
          })}
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
        <div className="footer-container">
          <Footer />
        </div>
      </div>
      <style jsx>{`
        body {
          background-color: #f2f2f2;
        }
        .main-container {
          width: 65vw;
          height: 70vh;
          margin: 5rem auto;
          background-color: #fbfcfe;
          background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
          background-repeat: no-repeat;
          background-position: top 300% right -45%;
          position: relative;
        }
        .nav-container {
          padding-top: 2rem;
        }
        .content-container {
          width: 60%;
          margin-right: 2rem;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }
        .header-container {
          margin: 2rem auto;
          display: flex;
          flex-direction: row;
        }
        .image-container {
          width: 35%;
          height: 20%;
        }
        .img-content {
          width: 20rem;
          height: 32rem;
        }
        .text {
          position: absolute;
          top: 33rem;
          left: 5rem;
          font-size: 15px;
        }

        .client-container {
          background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
          background-repeat: no-repeat;
          background-position: left -40% bottom -2%;
          background-color: #1b262f;
          width: 100%;
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text-container {
          width: 70%;
          padding: 30px;
          text-align: left;
        }
        .logo-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 50px;
          padding: 40px;
        }
        .section-easy-to-implement {
          margin: 5rem auto;
          display: flex;
          flex-direction: row;
          align-itens: center;
          justify-content: center;
          width: 70%;
        }
        .img-section-easy-to-implement {
          width: 27rem;
          height: 20rem;
        }
        .text-right {
          width: 55%;
          margin: 4rem auto;
          color: #6c8294;
          font-size: 15px;
          line-height: 28px;
        }
        .section-simple-ui {
          margin: 5rem auto;
          display: flex;
          flex-direction: row;
          align-itens: center;
          justify-content: center;
          width: 70%;
          position: relative;
        }
        .section-simple-ui:before {
          content: " ";
          display: block;
          background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
          background-position: top 50% right -710%;
          background-repeat: no-repeat;
          position: absolute;
          top: -10%;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
        }
        .img-section-simple-ui {
          width: 30rem;
          height: 31rem;
        }
        .text-left {
          width: 45%;
          margin: 8rem auto;
          color: #6c8294;
          font-size: 15px;
          line-height: 28px;
        }

        .card-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 65vw;
        }

        .ready-to-start {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          margin: 1rem;
          width: 65vw;
        }

        /******media query **************/

        @media (min-width: 767px) and (max-width: 1200px) {
          .main-container {
            width: 50vw;
            flex-direction: column;
            background-position: top -625px right -100px;
          }

          .header-container {
            width: 100%;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
          }
          .content-container {
            flex: 0 1 100%;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .text {
            position: absolute;
            top: 83rem;
            left: 6rem;
          }
          .image-container {
            flex: 0 1 100%;
            align-items: center;
            justify-content: center;
            width: 50%;
          }
          .client-container {
            margin-top: 4rem;
            width: 100%;
            height: 100%;
            flex: 0 1 100%;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
          }
          .logo-container {
            flex: 0 1 100%;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .text-container {
            width: 100%;
            padding: 30px;
            text-align: center;
          }
          .section-easy-to-implement {
            flex-direction: column;
            align-itens: center;
            justify-content: center;
            width: 70%;
          }
          .section-simple-ui {
            flex-direction: column-reverse;
            align-itens: center;
            justify-content: center;
            width: 70%;
          }
          .section-simple-ui:before {
            display: none;
          }
          .img-section-easy-to-implement,
          .img-section-simple-ui {
            width: 25rem;
            height: 26rem;
          }
          .img-right.img-left {
            width: 100%;
          }
          .text-right {
            width: 100%;
            text-align: center;
          }
          .text-left {
            width: 100%;
            text-align: center;
          }

          .card-container {
            margin: 1rem auto;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .main-container {
            width: 50vw;
            margin: 0.5rem auto;
            flex-direction: column;
            background-position: top -625px right -230px;
          }
          .header-container {
            width: 100%;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
          }
          .content-container {
            width: 100%;
            flex: 0 1 100%;
            align-items: center;
            justify-content: center;
          }
          .text {
            position: absolute;
            top: 57rem;
            left: 4rem;
          }
          .image-container {
            flex: 0 1 100%;
            align-items: center;
            justify-content: center;
            width: 50%;
          }

          .img-content {
            width: 15rem;
            height: 26rem;
          }
          .client-container {
            margin-top: 4rem;
            width: 100%;
            height: 100%;
            flex: 0 1 100%;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
          }
          .logo-container {
            flex: 0 1 100%;
            gap: 50px;
            width: 100%;
          }
          .text-container {
            width: 100%;
            text-align: center;
          }
          .section-easy-to-implement {
            flex-direction: column;
            align-itens: center;
            justify-content: center;
            width: 80%;
          }
          .section-simple-ui {
            flex-direction: column-reverse;
            align-itens: center;
            justify-content: center;
            width: 80%;
          }
          .section-simple-ui:before {
            display: none;
          }
          .img-section-easy-to-implement,
          .img-section-simple-ui {
            width: 18rem;
            height: 16rem;
          }
          .img-right,
          .img-left {
            width: 100%;
          }
          .text-right,
          .text-left {
            width: 100%;
            text-align: center;
          }

          .card-container {
            width: 80%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
