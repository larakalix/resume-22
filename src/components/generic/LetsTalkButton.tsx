import clsx from "clsx";

interface Props {
    inverted: boolean;
    justMail?: boolean;
}

export const LetsTalkButton = ({ inverted, justMail = false }: Props) => {
    const styles = clsx({
        ["text-white bg-black dark:text-black dark:bg-white"]: inverted && !justMail,
        ["text-black bg-white dark:text-white dark:bg-black"]: !inverted && !justMail,
        ["bg-transparent text-white dark:text-black text-[2.5rem] md:text-[5rem] font-bold"]: justMail === true,
    });

    return (
        <a
            href="mailto:uki@live.co.uk"
            className={`font-montserrat font-bold px-8 py-6 rounded flex justify-center items-center ${styles}`}
        >
            {justMail ? "uki@live.co.uk" : "Got a Project? Let's talk!"}
        </a>
    );
};
