interface HeaderLinkProps {
    route: string;
    anker: string;
    label: string;
    routeToShow?: string[] | undefined;
    highlight?: boolean;
    highlightColor?: string;
    isOnMobile?: boolean;
    mobileClick: any;
}
declare enum TitleSize {
    default = 0,
    big = 1,
    small = 2,
    extrasmall = 3
}

interface Props {
    inverted: boolean;
    title: string;
    size?: TitleSize;
    subtitle?: string | null;
    className?: string | undefined;
}
declare const Title: ({ title, inverted, size, subtitle, className, }: Props) => JSX.Element | null;

export { HeaderLinkProps as H, Title as T, TitleSize as a };
