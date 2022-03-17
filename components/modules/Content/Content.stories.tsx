import { Meta, Story } from "@storybook/react";
import Content, { ContentProps } from "./Content";

export default {
	title: "modules/Content",
	component: Content,
} as Meta;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const cont = Template.bind({});
cont.args = {
	content:
		"**Overview of DeepCrawl**\n\nDeepCrawl is the world’s most comprehensive website crawler, providing actionable data for flawless website architecture. By identifying and monitoring key issues that could affect SEO performance, we empower our clients to optimize their websites for users and search engines alike. This enables our clients to drive further traffic and revenue from their organic channel.\n\nWinner of Best SEO Software at the European Search Awards, we're proud to be trusted by some of the world's top SEOs in over 50 countries.\n\nOur ultimate vision is to become the tool of choice for marketers across the world - letting them crawl and analyse all of their websites to identify key insights. To help us support that vision we’re looking for bright, ambitious, and passionate talent to join us across our London, New York City, and Krakow offices.\n\nWe are looking for the best people around the world, so foreign nationals are welcome to apply, we can sponsor your visa if you are interested in relocating.\n\n**The role**\n\nAt DeepCrawl we are solving big data problems. We crawl absolutely huge websites, producing many terabytes of data and even more after we process it. We then apply queries at scale in order to provide world class insights to our customers who need to manage their SEO.\n\nIn this role you will be part of the team responsible for re-imagining existing DeepCrawl API using TypeScript and GraphQL. You will be creating testable, efficient, clean and maintainable code following DDD + BDD practices.\n\n**Our stack**\n\nTypeScript, Elasticsearch, PostgreSQL, Redis, Amazon ECS, MySQL, Docker, Terraform, Node.Js, Apollo server + GraphQL (type-graphql), TypeORM, Cucumber, Jest, TSLint, Love\n\n**What you’ll get to do**\n\n- Contribute directly to the development of our new GraphQL API\n- Develop new features and move existing API feature to the new API\n- Creation of possible new microservices as needed for new tools the company creates\n- Come up with creative solutions to scale microservices for different cloud applications\n- Develop software following DDD + BDD practices and working in Agile Kanban environment.\n- Code review\n- Requirements\n\n**What you’ll bring**\n\n- Solid software engineering experience\n- Extensive background developing large node.js applications in TypeScript\n- Adherence to always writing your test first and code against that failing test\n- A love for clean code concepts by Bob C Martin\n- Experience with .feature files and ability to write step definitions against them\n- Familiarity with example and rule mapping in a 3 amigo session\n- Passion for learning and desire to help us learn as well\n- Belief in the craft of software engineering, but are pragmatic when necessary\n- Respect whilst challenging your peers and welcome their reciprocated challenge\n\n**We’d especially love it if you have**\n\n- Developed and used GraphQL APIs.\n- Exposure to software architectures like Hexagonal, Onion, DDD\n- A keen understanding of software design patterns and where each can be applied\n- Worked with ElasticSearch.\n- Lead and mentored junior developers\n- Flirted with other typed languages such as C#, Java, Scala etc\n\n### **Benefits**\n\n**Why work with DeepCrawl?**\n\n- We're an innovative and fast growing tech start-up\n- Raised our series A investment from a prominent venture capitalist\n- An international business, with clients all over the world and offices across London, New York City and Krakow\n- Flexible working from home & remote working policy\n- Potential to travel to other offices\n- Annual personal education budget\n- Company trips\n- Monthly office drinks & lunches\n- Comprehensive private healthcare cover\n- Company option shares participation\n- Newest hardware\n\nIf you’re looking for an exciting opportunity to work with a fast-growing and innovative tech company, then please get in touch!\n",
};
