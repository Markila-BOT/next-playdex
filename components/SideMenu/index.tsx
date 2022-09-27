import { useSideMenu } from '../../lib/config/menu';
import Menu, { ChildrenItem } from './Menu';
import styles from '../../styles/Menu.module.css';

export const SideMenu = () => {
  const menu = useSideMenu() as ChildrenItem[];

  return <div className={styles.sidebarWrap}>{Menu(menu)}</div>;
};
