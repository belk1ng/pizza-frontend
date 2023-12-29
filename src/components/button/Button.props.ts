import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonSize = "large" | "small";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  size?: ButtonSize;
  startIcon?: ReactNode;
}
