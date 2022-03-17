import React from "react";
import Markdown from "markdown-to-jsx";
import Text from "../../atoms/Text/Text";
export type ContentProps = {
	content: string;
};
const Content = ({ content }: ContentProps) => {
	return (
		<div className='text-base font-light list-disc w-[50%]'>
			<Markdown
				options={{
					overrides: {
						strong: {
							component: Text,
							props: {
								size: "md",
								varient: "h",
								className: "my-2 mt-3",
							},
						},
						p: {
							component: "p",
							props: {
								className: "last:font-normal last:mt-3 ",
							},
						},
						ul: {
							component: "ul",
							props: {
								className: "list-disc list-inside",
							},
						},
					},
				}}
			>
				{content}
			</Markdown>
		</div>
	);
};

export default Content;
