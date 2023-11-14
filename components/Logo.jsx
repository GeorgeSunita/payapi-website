export function Logo(props, i) {
  return (
    <>
      <a>
        <img className={props.className} src={props.logo} key={i} alt="logo" />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
          cursor: pointer;
          transition: all 0.15s ease-in-out;
        }
        a:hover {
          filter: brightness(80%);
          transform: translateY(4px);
        }
        .white {
          filter: brightness(0) invert(1);
        }
        .grey {
          filter: invert(27%) sepia(58%) saturate(333%) hue-rotate(164deg)
            brightness(96%) contrast(93%);
        }
        @media (min-width: 767px) and (max-width: 1200px) {
          img {
            width: 100px;
            height: 15px;
          }
        }

        @media (max-width: 767px) {
          img {
            width: 60px;
            height: 15px;
          }
        }
      `}</style>
    </>
  );
}
//** logos need to be in different colors in 2 pages- css filter is used */
//https://isotropic.co/tool/hex-color-to-css-filter/
