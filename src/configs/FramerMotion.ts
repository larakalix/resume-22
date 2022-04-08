export const basic_config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
};

export const div_config: any = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            scale: 3,
        },
    },
};

export const mobile_menu_config: any = {
    initial: { x: -100 },
    animate: { x: 0 },
    exit: { x: -100 },
};
