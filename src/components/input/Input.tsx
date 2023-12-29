import { FC } from "react";
import { InputProps } from "./Input.props.ts";
import classes from "./Input.module.css";

const Input: FC<InputProps> = ({ label, startIcon, ...props }) => {
  return (
    <label className={classes.input}>
      {startIcon && <div>{startIcon}</div>}
      {label && <span className={classes.input__label}>{label}</span>}
      <input className={classes.input__field} {...props} />
    </label>
  );
};

export default Input;
