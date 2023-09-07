export function CaseStudyContentLeft({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-xl flex flex-col gap-10 text-base leading-7 lg:col-span-7">
			{children}
		</div>
	);
}

export function CaseStudyContentRight({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="max-w-xl flex flex-col gap-10 lg:col-span-5">
			{children}
		</div>
	);
}

export default function CaseStudyContent({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 lg:gap-y-16 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
			{children}
		</div>
	);
}
