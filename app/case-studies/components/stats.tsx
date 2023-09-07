export type Stats = {
	label: string;
	value: string;
};

export default function CaseStudyStats({ stats }: { stats: Array<Stats> }) {
	return (
		<dl className="mt-10 flex justify-start gap-8 flex-wrap flex-row sm:mt-10">
			{stats.map((stat, statIdx) => (
				<div key={statIdx}>
					<dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">
						{stat.value}
					</dd>
					<dt className="text-sm leading-6 text-grey-200">
						{stat.label}
					</dt>
				</div>
			))}
		</dl>
	);
}
