import { type MetaFunction } from "@remix-run/node";
import HomeComponent from "~/components/home/home-component";

export const meta: MetaFunction = () => {
  return [
    { title: "PulseMind | FullStack Developer & UI/UX Designer" },
    {
      name: "description",
      content:
        "Hi! I'm from Poland and my real name is Dominik. I'm a FullStack Developer and UI/UX Designer.",
    },
    {
      name: "keywords",
      content:
        "programista, FullStack Developer, FrontEnd Developer, BackEnd Developer, React Developer, JavaScript Developer, TypeScript Developer, UI/UX Designer, web developer, software developer, software engineer, React.js, Node.js, Java, Spring, JavaScript, TypeScript, web applications, mobile applications, frontend development, backend development, software development, web design, UX design, UI design, web programming, web development, JavaScript programming, coding, HTML, CSS, Git, RESTful API, Agile development, system architecture, web performance optimization, responsive design, cross-platform development, cloud developer, AWS, Google Cloud, Firebase, MongoDB, MySQL, PostgreSQL, Docker, Kubernetes, DevOps, continuous integration, continuous deployment, SEO optimization, software testing, version control, application security, authentication, authorization, OAuth, JWT, software architecture, web technologies, JavaScript frameworks, modern web technologies",
    },
    {
      property: "og:title",
      content: "PulseMind | FullStack Developer & UI/UX Designer",
    },
    {
      property: "og:description",
      content:
        "Hi! I'm from Poland and my real name is Dominik. I'm a FullStack Developer and UI/UX Designer.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.pulsemind.pl",
    },
  ];
};

export default function Index() {
  return <HomeComponent />;
}
