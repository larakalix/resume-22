import clsx from "clsx";

interface Props {
    inverted: boolean;
    justMail?: boolean;
}

export const LetsTalkButton = ({ inverted, justMail = false }: Props) => {
    const styles = clsx({
        ["text-white bg-black"]: inverted && !justMail,
        ["text-black bg-white"]: !inverted && !justMail,
        ["bg-transparent text-white text-[5rem] font-bold"]: justMail === true,
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
