import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "large" | "small";
type ButtonVariant = "contained" | "outlined";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  startIcon?: ReactNode;
  circled?: boolean;
  variant?: ButtonVariant;
}
