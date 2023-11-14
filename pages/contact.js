import { Title } from "../components/Title";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";
import { Email } from "../components/Email";
import { useState } from "react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

export default function Contact() {
  const logos = [
    {
      i: "0",
      logo: "assets/shared/desktop/tesla.svg",
      className: "grey",
    },
    {
      i: "1",
      logo: "assets/shared/desktop/microsoft.svg",
      className: "grey",
    },
    {
      i: "2",
      logo: "assets/shared/desktop/hewlett-packard.svg",
      className: "grey",
    },
    {
      i: "3",
      logo: "assets/shared/desktop/oracle.svg",
      className: "grey",
    },
    {
      i: "4",
      logo: "assets/shared/desktop/google.svg",
      className: "grey",
    },
    {
      i: "5",
      logo: "assets/shared/desktop/nvidia.svg",
      className: "grey",
    },
  ];

  ///handle multiple form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [inputError, setInputError] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const [isRed, setIsRed] = useState(false);

  //The handleChange function is called every time a user types a character in the input field.
  //It updates the inputValue state to reflect the current value of the input field, and then checks whether the value is > 0.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setIsChecked(event.target.checked);

    if (value.length == 0) {
      setInputError("This field can't be empty");
      setIsRed(!isRed);
    } else {
      setInputError(null);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      ` Name: ${formData.name},  Email: ${formData.email}, Message: ${formData.message}`
    );
    const value = formData.email;
    setEmailInput(value);

    if (value.length > 0) {
      // submit form
    } else {
      setInputError("This field can't be empty");
    }
  }
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="title-container">
          <Title
            text="  Submit a help request and we’ll get in touch shortly."
            color="#36536B"
            size="56px"
            letterSpace="-.43px"
          />
        </div>

        <div className="data-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`input ${inputError ? "red-placeholder" : ""}`}
              />
              {inputError && <div style={{ color: "red" }}>{inputError}</div>}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`input ${inputError ? "red-placeholder" : ""}`}
              />
              {inputError && <div style={{ color: "red" }}>{inputError}</div>}
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={`input ${inputError ? "red-placeholder" : ""}`}
              />
              {inputError && <div style={{ color: "red" }}>{inputError}</div>}
              <label htmlFor="check">
                <input
                  id="check"
                  type="checkbox"
                  name="check"
                  checked={isChecked}
                  onChange={handleChange}
                />
                Stay up-to-date with company announcements and updates to our
                API
              </label>
              <button
                className="submit-button"
                type="submit"
                onClick={handleChange}
              >
                Submit
              </button>
            </form>
          </div>{" "}
          <div className="logo-container">
            <p>Join the thousands of innovators already building with us.</p>

            {logos.map(function (elem, i) {
              return (
                <Logo
                  key={i}
                  logo={elem.logo}
                  className={elem.className}
                  style={{ width: "15px", height: "15px" }}
                />
              );
            })}
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
        <div className="footer-container">
          <Footer />
        </div>
      </div>
      <style jsx>{`
        body {
          background-color: #f2f2f2;
        }
        .container {
          width: 65vw;
          height: 70vh;
          margin: 5rem auto;
          background-color: #fbfcfe;
          background-image: url("../assets/shared/desktop/bg-pattern-circle.svg");
          background-repeat: no-repeat;
          background-position: top 450% right -35%;
        }

        .title-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60%;
          margin: 3rem 9rem;
        }
        .data-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5rem auto;
        }
        .form-container {
          width: 30%;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
        input {
          font-family: "Public Sans";
          font-size: 15px;
          font-weight: regular;
          width: 20rem;
          height: 4rem;
          border: 0;
          outline: 0;
          border-bottom: 1px solid #36536b;
          color: #36536b;
        }
        input:focus:invalid {
          border-bottom: 1px solid red;
        }
        input:focus:invalid::-webkit-input-placeholder {
          color: red;
        }
        input :not(:last-child) {
          margin-bottom: 40px;
        }

        #message {
          font-family: "Public Sans";
          font-size: 15px;
          font-weight: regular;
          width: 20rem;
          height: 4rem;
          margin-top: 30px;
          border: 0;
          outline: 0;
          border-bottom: 1px solid #36536b;
        }
        input[type="checkbox"] {
          width: 3rem;
          height: 1rem;
          margin-top: 1rem;
          accent-color: #ba4270;
        }
        input[type="checkbox"] + label {
          display: inline-block;
          padding: 0 0 0 0px;
        }
        .red-placeholder::placeholder {
          color: red;
        }
        .submit-button {
          background-color: #fbfcfe;
          border: 1px solid #36536b;
          border-radius: 20px;
          color: #36536b;
          cursor: pointer;
          display: inline-block;
          font-family: "public-sans";
          font-size: 15px;
          font-weight: bold;
          height: 2rem;
          padding: 5px;
          text-align: center;
          transition: all 0.15s ease-in-out;
          width: 10rem;
          line-height: 20px;
          margin: 30px auto;
        }
        .submit-button:hover {
          background-color: #36536b;
          color: black;
        }

        .logo-container {
          width: 50%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 30px;
          padding: 40px;
        }
        p {
          color: #36536b;
          font-family: DM Serif Display;
          font-size: 24px;
          letterspace: -0.18px;
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
          .container {
            width: 50vw;
            margin: 2rem auto;
            display: flex;
            flex-direction: column;
          }
          .title-container {
            align-items: center;
            justify-content: center;
            width: 100%;
            margin: 0 auto;
          }
          .form-container {
            width: 60%;
          }
          input[type="checkbox"] + label {
            display: inline-block;
            padding: 2rem;
          }
          .data-container {
            flex-direction: column;
            flex: 0 1 100%;
          }

          .logo-container {
            width: 70%;
            text-align: center;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          .ready-to-start {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .footer-container {
            width: 100%;
          }
        }
        @media (max-width: 767px) {
          .container {
            width: 100%;
            margin: 0;
          }
          .title-container {
            align-items: center;
            justify-content: center;
            width: 60%;
            margin: 0 auto;
          }
          .form-container {
            width: 60%;
            align-items: center;
            justify-content: center;
          }
          .data-container {
            flex-direction: column;
            flex: 0 1 100%;
          }

          .logo-container {
            width: 40%;
            text-align: center;
            display: flex;
            flex-direction: row;
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

///REFERENCE LINKS

//https://www.freecodecamp.org/news/how-to-build-forms-in-react/
