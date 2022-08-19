import { GenericDateProps } from "./GenericProps";

export interface HeaderLinkProps extends GenericDateProps {
    _id: string;
    _rev: string;
    _type: string;
    route: string;
    anker: string;
    label: string;
    routeToShow?: string[] | undefined;
    highlight?: boolean;
    highlightColor?: string;
    isOnMobile?: boolean;
    mobileClick: any;
}
