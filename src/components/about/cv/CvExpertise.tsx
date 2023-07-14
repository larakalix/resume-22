import { ExpertiseSquare } from "./childs/ExpertiseSquare";

export const CvExpertise = () => {
    return (
        <div className="bg-white dark:bg-black px-12 pt-5 pb-10 text-v-black dark:text-white flex flex-col flex-1">
            <h3 className="uppercase text-[1.8rem] font-bold py-4 text-v-black dark:text-white">
                Expertise
            </h3>

            <div className="flex flex-col gap-4">
                <ExpertiseSquare
                    title="NOVATECH | JavaScript Frontend Dev"
                    place="El Salvador/ Jan 2022 - May 2023"
                    skills={[
                        "Frontend: Angular, React.js, Next.js, TypeScript, Strapi",
                        "Tools: Azure DevOps, Firebase, Figma, Git",
                    ]}
                    brief={[
                        "During this positon, I've worked the company website, improving the final user experience and adding new features to the landing pages, using Next.js and Strapi, the project achieved a better score on Google Lighthouse.",
                        "Algo have been working on a new dashboard for Unicomer, to handle user payment services in a better way with a cleanest UI",
                    ]}
                />

                <ExpertiseSquare
                    title="STEFANINI | JavaScript Frontend Dev"
                    place="El Salvador/ Feb 2022 - April 2022"
                    skills={[
                        "Frontend: React.js, TypeScript, Redux",
                        "Tools: Jira, Confluence, Git",
                    ]}
                    brief={[
                        "During this position, I developed new features to help users to manage their data in a better way, using clean UI views to handle business logic, and reduce loading times.",
                        "The project is currently using a java backend service, so my work was create new features to consume data from new endpoints, and develop final user views for them to get an easier experience because of the data complexity that they need to handle.",
                    ]}
                />

                <ExpertiseSquare
                    title="HYPERNOVA LABS| Backend Dev"
                    place="Panama / Feb 2021- Jan 2022"
                    skills={[
                        "Frontend: Angular, React.js, TypeScript",
                        "Backend: .NET Core, MS SQL Server, NodeJS, MongoDB, EF Core",
                        "Tools: Azure DevOps, Git",
                    ]}
                    brief={[
                        "During this position, I've worked on new API features for bank services, and my main goal was to create faster and more reliable endpoints to be used on frontend and mobile apps.",
                        "I increased the performance using caching and async methods used on a real time implementation of tracking services.",
                    ]}
                />

                <ExpertiseSquare
                    title="GO DIGITAL GROUP | Fullstack Dev"
                    place="Panama / Dec 2018 - 2021"
                    skills={[
                        "Frontend: Angular, React.js, TypeScript, Bootstrap 4, Bulma",
                        "Mobile: Ionic, TypeScript",
                        "Backend: .NET Core, MS SQL Server, EF Core",
                        "Tools: Asana, Git, Firebase, Docker",
                    ]}
                    brief={[
                        "During this position, I've worked in a loyalty program from scratch, in order to let stores to create dynamic storefronts or manage their loyalty program using a DnD builder to create their landing pages.",
                        "Also, the users have the ability to create payment links or redeem points, so with this we achieved the clients to cover all their needs in a single platform.",
                    ]}
                />

                <ExpertiseSquare
                    title="ONLINE | Backend Dev / IT Website Production Area Coordinator / Web Designer"
                    place="Nicaragua / May 2016 - Oct 2018"
                    skills={[
                        "Web Design: HTML5, CSS3, JavaScript, jQuery, Razor, Bootstrap 3",
                        "Backend: .NET Framework, MS SQL, .NET ADO",
                    ]}
                    brief={[
                        "During this position, I started as a web designer, and after 1 year I was promoted to be the IT Website Production Area Coordinator and a Backend Developer.",
                        "Then, I was in charge of e-commerce website backlog handling, in order to set the priority of each project to prepare these to be designed by developers. We worked using a boilerplate, in order to let the team to work faster, reducing the time to create new sites from 15 days to 3 days.",
                    ]}
                />
            </div>
        </div>
    );
};
