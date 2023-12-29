import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonTextTransform = "default" | "uppercase";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  textTransform?: ButtonTextTransform;
  startIcon?: ReactNode;
}
