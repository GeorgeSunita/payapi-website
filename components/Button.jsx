export function Button(props) {
  return (
    <>
      <div>
        <a>{props.title}</a>
      </div>
      <style jsx>{`
        a {
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
        a:hover {
          background-color: #36536b;
          color: black;
        }
      `}</style>
    </>
  );
}
