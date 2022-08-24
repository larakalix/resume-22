import { Formik, Form, Field, ErrorMessage } from "formik";
import useNewsLetter from "../../hooks/useNewsletter";
import { NewsletterProps } from "../../interfaces";
import { SignupSchema } from "../../schemas";

const initialValues: NewsletterProps = { email: "" };

export const Newsletter = () => {
    const { isSubscribed, subscribeEmail } = useNewsLetter();
    return (
        <div className="w-full bg-white color-black h-[20rem] rounded-sm flex items-center justify-center flex-col mt-8 text-center">
            <h3 className="text-[1.875rem] leading-[2.25rem]">
                Subscribe to my newsletter
            </h3>
            <p>
                Subscribe to my newsletter and never miss my upcoming articles
            </p>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={async ({ email }, { setSubmitting, resetForm }) => {
                    const alreadySubscribed = await isSubscribed({ email });
                    if (!alreadySubscribed) await subscribeEmail({ email });
                    resetForm();
                }}
            >
                {({ touched, handleSubmit, isSubmitting }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="w-full max-w-[80%] sm:max-w-sm md:max-w-md lg:max-w-lg mt-8"
                    >
                        <Field
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="shadow appearance-none border rounded w-full py-5 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {touched && (
                            <div className="w-full py-3 text-[0.9rem] text-red-500">
                                <ErrorMessage name="email" />
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-v-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors select-none"
                        >
                            Subscribe
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};