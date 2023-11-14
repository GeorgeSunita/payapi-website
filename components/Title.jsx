export function Title(props) {
  return (
    <>
      <h2>{props.text}</h2>
      <style jsx>{`
        h2 {
          color: ${props.color};
          font-family: DM Serif Display;
          font-weight: regular;
          font-size: ${props.size};
          line-height: ${props.height};
          letter-spacing: ${props.letterSpace};

          margin: 30px auto;
        }

        @media (min-width: 767px) and (max-width: 1080px){
          h2 {
            font-size: 48px;
            letterSpace="-.37px"
            
            text-align:center;
            margin: 30px auto;
          }
        }
          @media (max-width: 767px) {
            h2 {
              font-size: 36px;
              letterSpace="-.28px"
              text-align:center;
              margin: 30px auto;
            }
        }
      `}</style>
    </>
  );
}
