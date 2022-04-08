import { NeedProject } from "./NeedProject";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const ContactWrap = ({ children }: Props) => {
    return (
        <>
            {children}
            <div className="my-4">
                <NeedProject />
            </div>
        </>
    );
};

export default ContactWrap;
