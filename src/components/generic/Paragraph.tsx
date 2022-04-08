interface Props {
    text: string;
}

export const Paragraph = ({ text }: Props) => {
  return (
    <p className="mb-4 text-2xl">{ text }</p>
  )
}
