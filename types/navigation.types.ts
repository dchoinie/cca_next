export interface SubItem {
  _key: string;
  label: string;
  link: string;
  external: boolean;
}

export interface NavItem {
  _id: string;
  label: string;
  link: string;
  order: number;
  external: boolean;
  subLinks?: SubItem[];
}

export interface Navigation {
  _id: string;
  items: NavItem[];
}
