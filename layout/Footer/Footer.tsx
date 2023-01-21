import React from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export function Footer({ className, ...props }: FooterProps): JSX.Element {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <p className={styles.links}>
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </p>
      <p className={styles.links}>
        <a href="">Пользовательское соглашение</a>
      </p>
      <p className={styles.links}>
        <a href="">Политика конфиденциальности</a>
      </p>
    </div>
  );
}
