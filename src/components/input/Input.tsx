import { FC } from "react";
import { InputProps } from "./Input.props.ts";
import classes from "./Input.module.css";
import cn from "classnames";

const Input: FC<InputProps> = ({
  label,
  startIcon,
  valid = true,
  ...props
}) => {
  return (
    <label className={classes.input}>
      {startIcon && <div>{startIcon}</div>}
      {label && <span className={classes.input__label}>{label}</span>}
      <input
        className={cn(classes.input__field, {
          [classes["input__field--invalid"]]: !valid,
        })}
        {...props}
      />
    </label>
  );
};

export default Input;
