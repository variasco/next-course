import { PtagProps } from "./Ptag.props";
import cn from "classnames";
import styles from "./Ptag.module.css";

export function Ptag({
  children,
  size = "16px",
  className,
  ...props
}: PtagProps): JSX.Element {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.big]: size == "18px",
        [styles.medium]: size == "16px",
        [styles.small]: size == "14px",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
