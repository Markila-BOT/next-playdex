import { useSideMenu } from '../../lib/config/menu';

export const SideMenu = () => {
  const menu = useSideMenu();
  return <>{JSON.stringify(menu)}</>;
};
