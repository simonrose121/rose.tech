import Button from '@/app/components/button';
import CaseStudyTechnologies from './technologies';

export default function CaseStudyProject({
	name,
	logoSrc,
	children,
	technologies,
	linkHref,
}: {
	name: string;
	logoSrc: string;
	children: React.ReactNode;
	technologies: string;
	linkHref?: string;
}) {
	return (
		<div className="flex mt-5 bg-black ring-1 ring-grey-500 p-5 gap-5 rounded-lg flex-col">
			<img src={logoSrc} className="w-96" />
			<p>{children}</p>
			<CaseStudyTechnologies technologies={technologies} />
			{linkHref ? (
				<Button href={linkHref} text={name} external></Button>
			) : (
				<></>
			)}
		</div>
	);
}
