import clsx from "clsx";

interface Props {
    inverted: boolean;
    justMail?: boolean;
}

export const LetsTalkButton = ({ inverted, justMail = false }: Props) => {
    const styles = clsx({
        ["text-white bg-v-blue dark:text-white dark:bg-v-blue"]:
            inverted && !justMail,
        ["text-v-black bg-white dark:text-white dark:bg-v-black"]:
            !inverted && !justMail,
        ["bg-transparent text-white dark:text-v-black text-[2.5rem] md:text-[5rem] font-bold"]:
            justMail === true,
    });

    return (
        <a
            href="mailto:uki@live.co.uk"
            className={`font-montserrat font-bold px-8 py-4 rounded-v-rounded flex justify-center items-center ${styles} hover:opacity-90`}
        >
            {justMail ? "uki@live.co.uk" : "Got a Project? Let's talk!"}
        </a>
    );
};
