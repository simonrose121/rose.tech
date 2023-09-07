import { clients } from '@/app/components/clients';
import CaseStudyStats, { Stats } from './stats';

export default function CaseStudyHeader({
	client,
	introText,
	stats,
}: {
	client: string;
	introText: string;
	stats: Array<Stats>;
}) {
	return (
		<div className="mx-auto max-w-2xl lg:mx-0">
			<div
				style={{
					fill: 'white',
					width: '100%',
					maxHeight: '100%',
				}}
				className="w-auto"
			>
				{
					clients('white', '100px', '120px').find(
						(c) => c.name === client
					)?.svg
				}
			</div>
			<p className="text-xl">{introText}</p>
			<CaseStudyStats stats={stats} />
		</div>
	);
}
