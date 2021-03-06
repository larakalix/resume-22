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
