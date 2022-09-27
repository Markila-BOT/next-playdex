import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Emoji, Icon } from '../../lib/types/media';
import styles from '../../styles/Menu.module.css';

export type ChildrenItem = {
  title: string;
  to: string;
  icon?: Icon | Emoji;
  action: () => void;
  children?: ChildrenItem[];
};

const Menu = (children: ChildrenItem[]) => {
  const [menuCatalog, setMenuCatalog] = useState<Record<string, boolean>>({});
  const handleClick = (item: string) => {
    setMenuCatalog(prev => ({ [item]: !prev[item] }));
  };

  return children.map((subOption, index) => {
    const hrefVal = subOption.to === '/' ? subOption.to : '/catalog/[...slug]';
    const aliasHref = subOption.to === '/' ? subOption.to : `/catalog${subOption.to}`;
    if (!subOption.children) {
      return subOption.title === 'Logout' ? (
        <a 
          key={index}
          className={styles.title}
          style={{ background: menuCatalog[subOption.title] ? 'green' : 'black' }}
          onClick={() => {
            handleClick(subOption.title);
            subOption.action();
          }}
        >
          {subOption.icon && <div>{`${subOption.icon}`}</div>}
          <span>{subOption.title}</span>
        </a>
      ) : (
        <Link key={index} href={hrefVal} as={aliasHref}>
          <a
            className={styles.title}
            style={{ background: menuCatalog[subOption.title] ? 'green' : 'black' }}
            onClick={() => {
              handleClick(subOption.title);
            }}
          >
            {subOption.icon && <div>{`${subOption.icon}`}</div>}
            <span>{subOption.title}</span>
          </a>
        </Link>
      );
    }

    return (
      <div key={index}>
        <Link href={'/catalog/[...slug]'} as={`/catalog${subOption.to}`}>
          <a
            className={styles.title}
            style={{ background: menuCatalog[subOption.title] ? 'green' : 'black' }}
            onClick={() => handleClick(subOption.title)}
          >
            {subOption.icon && <div>{`${subOption.icon}`}</div>}
            <span>{subOption.title}</span>
            <div>🔽</div>
          </a>
        </Link>
        <div className={menuCatalog[subOption.title] ? styles.ddList : styles.ddListHide}>
          {Menu(subOption.children)}
        </div>
      </div>
    );
  });
};

export default Menu;
