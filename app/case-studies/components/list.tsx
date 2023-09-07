export function CaseStudyListItem({
	icon,
	title,
	children,
}: {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<li className="flex gap-x-3">
			<span
				className="mt-1 h-5 w-5 flex-none text-primary-500"
				aria-hidden="true"
			>
				{icon}
			</span>
			<span>
				<strong className="font-semibold">{title}.</strong> {children}
			</span>
		</li>
	);
}

export default function CaseStudyList({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ul role="list" className="mt-8 max-w-xl space-y-8">
			{children}
		</ul>
	);
}
