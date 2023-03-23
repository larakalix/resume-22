import { NeedProject } from "./NeedProject";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ContactWrap = ({ children }: Props) => {
  return (
    <>
      {children}
      <NeedProject />
    </>
  );
};

export default ContactWrap;
