import type { FC } from "react";
import { createPortal } from "react-dom";

import classes from "./Loader.module.css";
import type { LoaderProps } from "./Loader.props";

const Loader: FC<LoaderProps> = ({ fullscreen }) => {
  const spinner = (
    <div className={classes.loader__wrapper}>
      <div className={classes.loader}></div>
    </div>
  );

  const loaderContainer = document.querySelector("main");

  if (fullscreen && loaderContainer) {
    loaderContainer.style.position = "relative";

    return createPortal(
      <div className={classes.loader__backdrop}>{spinner}</div>,
      loaderContainer
    );
  }

  return spinner;
};

export default Loader;
