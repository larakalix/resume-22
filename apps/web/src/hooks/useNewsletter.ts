import client from "../../sanity/client";
import { useToasts } from "react-toast-notifications";
import subClient from "../../sanity/subClient";
import { NewsletterProps } from "../interfaces";

interface Props {
  message: string;
  success: false;
}

const useNewsLetter = () => {
  const { addToast } = useToasts();

  const isSubscribed = async ({ email }: NewsletterProps) => {
    const query = `*[_type == "subs" && email == $email][0]{
            _id, email,
        }`;
    const result = await client.fetch(query, { email });
    if (result)
      addToast("you have already subscribed.", {
        appearance: "info",
        autoDismiss: true,
      });

    return result;
  };

  const subscribeEmail = async ({ email }: NewsletterProps) => {
    subClient
      .createIfNotExists({
        _id: `${email.split("@")[0]}_sub`,
        _type: "subs",
        email,
      })
      .then((response) => {
        addToast(`Thansk ${response?.email} for suscribing!`, {
          appearance: "success",
          autoDismiss: true,
        });
      })
      .catch((err) => {
        addToast(err?.message, {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

  return { isSubscribed, subscribeEmail };
};

export default useNewsLetter;
