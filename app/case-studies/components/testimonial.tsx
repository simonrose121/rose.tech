export default function CaseStudyTestimonial({
	children,
	imageSrc,
	name,
	role,
}: {
	children: React.ReactNode;
	imageSrc: string;
	name: string;
	role: string;
}) {
	return (
		<figure className="border-l border-grey-500 pl-9">
			<blockquote className="italic">
				<p>“{children}”</p>
			</blockquote>
			<figcaption className="mt-6 flex gap-x-4">
				<div className="text-sm leading-6">
					<strong className="font-semibold">{name}</strong> – {role}
				</div>
			</figcaption>
		</figure>
	);
}
