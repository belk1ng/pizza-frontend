import type { FC } from "react";

import RatingIcon from "@assets/icons/Rating";

import classes from "./Rating.module.css";
import type { RatingProps } from "./Rating.props";

const Rating: FC<RatingProps> = ({ value }) => {
  return (
    <div className={classes.rating}>
      {value}
      <RatingIcon />
    </div>
  );
};

export default Rating;
