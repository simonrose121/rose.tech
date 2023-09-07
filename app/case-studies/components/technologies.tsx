export default function CaseStudyTechnologies({
	technologies,
}: {
	technologies: string;
}) {
	return (
		<dl className="flex justify-start gap-8 flex-col sm:flex-row">
			<div>
				<dt className="text-sm leading-6 text-grey-200">
					Technologies Used
				</dt>
				<dd className="text-md font-bold tracking-tight text-white">
					{technologies}
				</dd>
			</div>
		</dl>
	);
}
