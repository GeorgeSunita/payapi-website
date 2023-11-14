import { Navbar } from "../components/Navbar";
import { Title } from "../components/Title";
import { PricingCard } from "../components/PricingCard";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Email } from "../components/Email";
import { TextBox } from "../components/TextBox";

export default function About() {
  return (
    <>
      <div className="main-container">
        <Navbar />

        <div className="title-container">
          <Title
            text=" We empower innovators by delivering access to the financial system"
            color="#36536B"
            size="56px"
            letterSpace="-.43px"
          />
        </div>
        <div className="text-container">
          <TextBox
            title=" Our Vision"
            text=" Our main goal is to build beautiful consumer experiences along with developer-friendly 
    infrastructure. The result is an intelligent tool that gives everyone the ability to create 
    amazing products that solve big problems. We are deeply focused on democratizing financial 
    services through technology."
          />
        </div>
        <div className="text-container">
          <TextBox
            title=" Our Business"
            text="At the core of our platform is the technical infrastructure APIs that connect consumers. 
    Our innovative product provides key insights for businesses and individuals, as well as 
    robust reporting for traditional financial institutions and developers. "
          />
        </div>
        <div className="image-container">
          <div className="desktop-image">
            <img
              src="../assets/about/desktop/image-team-members.jpg"
              alt="team-members"
            />
          </div>
          <div className="mobile-image">
            <img
              src="../assets/about/mobile/image-team-members.jpg"
              alt="team-members"
            />
          </div>
        </div>

        <div className="text-with-numbers">
          <div className="box-1">
            <div className="line"></div>
            <p className="text">Team Members</p>
            <p className="numbers">300+</p>
            <div className="line"></div>
          </div>
          <div className="box-2">
            <div className="line"></div>
            <p className="text"> Offices in the US </p>
            <p className="numbers">3</p>
            <div className="line"></div>
          </div>
          <div className="box-3">
            <div className="line"></div>
            <p className="text">Transactions analyzed </p>
            <p className="numbers">10M+</p>
            <div className="line"></div>
          </div>
        </div>
        <div className="text-container">
          <TextBox
            title="  The Culture"
            text=" We strongly believe there's always an opportunity to learn from each other outside of 
              day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
              We always value cross-team collaboration and diversity of thought, no matter the job title.
          "
          />
        </div>
        <div className="text-container">
          <TextBox
            title=" The People"
            text="We're all passionate about building a more efficient and inclusive financial infrastructure 
    together. At PayAPI, we have diverse backgrounds and skills. "
          />
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
        .main-container {
          width: 65vw;
          height: 70vh;
          margin: 5rem auto;
          background-color: #fbfcfe;
          background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
          background-repeat: no-repeat;
          background-position: top 450% right -35%;
        }

        .title-container {
          width: 45vw;
          height: 15vh;
          padding: 5rem 3rem;
        }
        .text-container {
          width: 65vw;
        }
        .image-container {
          width: 65vw;
          height: 55vh;
          background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
          background-size: 35rem;
          background-repeat: no-repeat;
          background-position: bottom 50% left -55%;
          z-index: -1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        img {
          width: 100%;
          height: 60%;
          object-fit: cover;
          overflow: hidden;
        }
        .line {
          border-bottom: 1px solid #979797;
          margin: 2rem 0;
        }
        .text-with-numbers {
          width: 100%;
          height: 20vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .box-1,
        .box-2,
        .box-3 {
          width: 25%;
          padding:1rem;
        }
        .text {
          font-size: 16px;
          color: #36536b;
        }
        .numbers {
          color: #ba4270;
          font-size: 56px;
          font-family: "DM Serif Display";
          line-height: -0.43px;
        }
        .ready-to-start {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          margin: 1rem;
          width: 65vw;
        }
        .mobile-image{
          display: none; !important
        }

        /******media query **************/

        @media (min-width: 767px) and (max-width: 1200px) {
          .main-container {
            width: 65vw;
            height: 15vh;
            margin: 2rem auto;
            background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
            background-repeat: no-repeat;
            background-position: top -630px right -475px;
          }
          .title-container {
            width: 100%;
            flex: 0 1 100%;
            margin: 1rem auto;
            padding: 2rem 3rem;
            justify-content: space-evenly;
          }
          .text-container {
            width: 65vw;
          }

          .image-container {
            width: 100%;
            flex: 0 1 100%;
            background-image: none;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
          }
          .text-with-numbers {
            margin-top: 3rem;
            flex: 0 0 100%;
          }
          .ready-to-start {
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
        @media (max-width: 767px) {
          .main-container {
            width: 100%;
            height: 100%;
            margin:0 auto;
            background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
            background-repeat: no-repeat;
            background-position: top -630px right -475px;
          }
          .title-container {
            width: 60%;
            flex: 0 1 100%;
            margin: 0 auto;
            justify-content: center;
            align-items: center;
          }
          .text-container {
            width: 70%;
            margin: 0rem auto;
          }
          .image-container{
            background-image:none;
            width: 100%;
            flex: 0 1 100%;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
          }
          .desktop-image {

            display: none;
        }
    
        .mobile-image {
    
            display: block;
        }
        .text-with-numbers {
          margin:3rem;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction:column;
          align-items: center;
          justify-content: center;
          position:relative;
        }
        .box-1{
          border-top:1px solid grey;
          
        }
        .box-3{
          border-bottom:1px solid grey;
        }
        .line{
          display:none;
        }
        .ready-to-start {
          width: 100%;
          margin:0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
          
        }
      `}</style>
    </>
  );
}
