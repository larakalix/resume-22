import { NeedProject } from "@ui/kit";

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
