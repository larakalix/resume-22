import styles from "./styles.module.scss";

type Props = {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    website: string;
};

export const CvHeader = ({
    name,
    title,
    location,
    phone,
    email,
    website,
}: Props) => {
    return (
        <section
            className={`w-full bg-green-500 before:opacity-100 dark:before:opacity-60 dark:bg-transparent relative ${styles["header-pattern"]} z-0 px-8 py-8 rounded-v-rounded`}
        >
            <div className={`flex justify-end w-full text-white pb-4`}>
                <div className="flex flex-col gap-2 text-end">
                    <div className="uppercase font-bold">
                        <h1 className="text-[2.4rem]">{name}</h1>
                        <h2 className="text-[1.4rem]">{title}</h2>
                    </div>

                    <ul className="text-[1rem]">
                        <li>{location}</li>
                        <li>{phone}</li>
                        <li>
                            <a
                                href={`https://${website}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {website}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${email}`}>{email}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
