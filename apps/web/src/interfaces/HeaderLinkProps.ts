import { GenericDateProps } from "./GenericProps";

interface SanityProps extends GenericDateProps {
  _id: string;
  _rev: string;
  _type: string;
}

export interface HeaderLinkProps {
  route: string;
  anker: string;
  label: string;
  routeToShow?: string[] | undefined;
  highlight?: boolean;
  highlightColor?: string;
  isOnMobile?: boolean;
  mobileClick: any;
}
