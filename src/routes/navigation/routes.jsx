import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { BiFoodMenu } from "react-icons/bi";
import { BiFlag } from "react-icons/bi";

export const routes = [
  {
    title: "Home",
    path: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Categories",
    path: "/categories",
    Icon: BiFoodMenu,
  },
  {
    title: "Ingredient",
    path: "/ingredient",
    Icon: BiSearch,
  },
  {
    title: "Area",
    path: "/area",
    Icon: BiFlag,
  },
];
