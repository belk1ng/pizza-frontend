import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "large" | "small";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  startIcon?: ReactNode;
  circled?: boolean;
}
