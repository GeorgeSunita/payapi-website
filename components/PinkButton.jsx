export function PinkButton(props) {
  return (
    <>
      <div>
        <a>{props.title}</a>
      </div>
      <style jsx>{`
        a {
          background-color: #ba4270;
          border-radius: 20rem;
          box-shadow: 0 8px 6px -6px #36536b;
          color: white;
          cursor: pointer;
          display: inline-block;
          font-family: Inter, sans-serif;
          font-family: "public-sans";
          font-size: 15px;
          font-weight: 600;
          height: 1rem;
          padding: 10px;
          text-align: center;
          transition: all 0.15s ease-in-out;
          width: 8rem;
        }
        a:hover {
          background-color: #da6d97;
        }
        @media (max-width: 767px) {
          a {
            width: 12rem;
          }
        }
      `}</style>
    </>
  );
}
