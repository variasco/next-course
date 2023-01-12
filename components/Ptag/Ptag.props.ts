import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: "14px" | "16px" | "18px";
}
