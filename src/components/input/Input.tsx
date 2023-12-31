import type { FC } from "react";
import type { InputProps } from "./Input.props";
import classes from "./Input.module.css";
import cn from "classnames";

const Input: FC<InputProps> = ({
  label,
  startIcon,
  valid = true,
  className,
  ...props
}) => {
  return (
    <label className={cn(classes.input, className)}>
      {startIcon && <div className={classes.input__icon}>{startIcon}</div>}
      {label && <span className={classes.input__label}>{label}</span>}
      <input
        className={cn(classes.input__field, {
          [classes["input__field--invalid"]]: !valid,
          [classes["input__field--external"]]: !!startIcon,
        })}
        {...props}
      />
    </label>
  );
};

export default Input;
