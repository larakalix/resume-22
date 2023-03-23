import { Button } from "@ui/kit";

export const Footer = () => {
  return (
    <div className="text-center pt-4 pb-8">
      <p className="font-semibold text-black dark:text-white">
        With love by{" "}
        <a
          href="https://twitter.com/KalixTheMan"
          className="font-montserrat font-bold"
        >
          Ivan Lara 👨‍💻 {new Date().getFullYear()}
        </a>
        <Button>
          <span>Hello</span>
        </Button>
      </p>
    </div>
  );
};
