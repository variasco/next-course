import { Menu } from "../Menu/Menu";
import { SidebarProps } from "./Sidebar.props";

export function Sidebar({ ...props }: SidebarProps): JSX.Element {
  return (
    <div {...props}>
      <h3>***Sidebar***</h3>
      <Menu />
    </div>
  );
}
