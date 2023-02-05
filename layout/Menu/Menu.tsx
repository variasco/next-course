import React, { ReactNode, useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import { TopLevelCategory } from "../../interfaces/page.interface";
import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import styles from "./Menu.module.css";
import cn from "classnames";

export function Menu(): JSX.Element {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const firstLevelMenu: FirstLevelMenuItem[] = [
    {
      route: "courses",
      name: "Курсы",
      icon: <CoursesIcon />,
      id: TopLevelCategory.Courses,
    },
    {
      route: "services",
      name: "Сервисы",
      icon: <ServicesIcon />,
      id: TopLevelCategory.Servises,
    },
    {
      route: "books",
      name: "Книги",
      icon: <BooksIcon />,
      id: TopLevelCategory.Books,
    },
    {
      route: "products",
      name: "Продукты",
      icon: <ProductsIcon />,
      id: TopLevelCategory.Products,
    },
  ];

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.route} className={styles.firstLevelBlock}>
            <a href={menuItem.route}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menuItem.id == firstCategory,
                })}
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </a>
            {menuItem.id == firstCategory && buildSecondLevel(menuItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuFL: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondLevelBlock}>
        {menu.map((menuItem) => {
          return (
            <div key={menuItem._id.secondCategory}>
              <div className={styles.secondLevel}>{menuItem._id.secondCategory}</div>
              <div
                className={cn(styles.thirdLevelBlock, {
                  [styles.thirdLevelBlockOpened]: menuItem.isOpened,
                })}
              >
                {
                  // menuItem.isOpened &&
                  buildThirdLevel(menuItem.pages, menuFL.route)
                }
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <a href={`/${route}/${page.alias}`} className={cn(styles.thirdLevel, { [styles.thirdLevelActive]: false })}>
        {page.category}
      </a>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
}
