import React from "react";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";

export function Sidebar({ ...props }: SidebarProps): JSX.Element {
  return <div {...props}>***Sidebar***</div>;
}
