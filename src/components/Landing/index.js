import React, { useRef, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [btn, setBtn] = useState(false);
  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);
  /**
   * permet d'afficher la griffe si on passe sur le bouton gauche
   */
  const setLeftImg = () => {
    refWolverine.current.classList.add("leftImg");
  };
  /**
   * permet d'afficher la griffe si on passe sur le bouton droite
   */
  const setRightImg = () => {
    refWolverine.current.classList.add("rightImg");
  };
  /**
   * permet d'effacer la griffe si on sort du bouton
   */
  const clearImg = () => {
    if (refWolverine.current.classList.contains("leftImg")) {
      refWolverine.current.classList.remove("leftImg");
    } else if (refWolverine.current.classList.contains("rightImg")) {
      refWolverine.current.classList.remove("rightImg");
    }
  };

  const displayBtn = btn && (
    <Fragment>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
        <Link className="btn-welcome" to="/signup">
          Inscription
        </Link>
      </div>
      <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
        <Link className="btn-welcome" to="/login">
          Connexion
        </Link>
      </div>
    </Fragment>
  );

  return (
    <main ref={refWolverine} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;
