import Link from 'next/link';
import { Client, clients } from '../components/clients';

const logoColour = 'white';
const logoWidth = '40px';
const logoHeight = '80px';

type CaseStudy = {
	id: number;
	client?: Client | undefined;
	href: string;
	description: string;
	colour: string;
	bgUrl: string;
	name?: string | undefined;
};

const caseStudies: Array<CaseStudy> = [
	{
		id: 1,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === '542 Digital'
		),
		href: '/case-studies/542-digital',
		description: `Technical strategy implementation, process transformation and growth consultancy.`,
		bgUrl: '542.png',
		colour: '#2C68FF',
		name: '542 Digital',
	},
	{
		id: 2,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'World Gold Council'
		),
		href: '/case-studies/world-gold-council',
		description: `Development of financial dashboards using a performant and reusable solution.`,
		bgUrl: 'wgc.png',
		colour: '#886116',
	},
	{
		id: 3,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'MTa Learning'
		),
		href: '/case-studies/mta-learning',
		description: `Product ownership, technical architecture, hiring and project management.`,
		bgUrl: 'mta.png',
		colour: '#402867',
	},
	{
		id: 4,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Sheffield Hallam University'
		),
		href: '/case-studies/end-point-assessment',
		description: `Creation and implementation of assessment processes for the next generation of tech leaders.`,
		colour: '#B6004C',
		bgUrl: 'epa.png',
		name: 'End Point Assessment',
	},
	{
		id: 5,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Loughborough University'
		),
		href: '/case-studies/cognitive-function-task',
		description: `Design and development of a gamified assessment system to measure dyscalculia in children.`,
		colour: '#6F3092',
		bgUrl: 'numeralis.png',
		name: 'Numeralis',
	},
	{
		id: 6,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Loughborough University'
		),
		href: '/case-studies/cognitive-function-task',
		description: `Design and development of a gamified assessment system to measure cognitive function.`,
		colour: '#6F3092',
		bgUrl: 'cft.png',
		name: 'Cognitive Function Task',
	},
	{
		id: 5,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Sheffield Hallam University'
		),
		href: '/case-studies/pirate-plunder',
		description: `Design and development of a programming game to teach block-based procedural abstraction.`,
		colour: '#6F3092',
		bgUrl: 'pp.png',
		name: 'Pirate Plunder',
	},
];

export default function CaseStudies() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Case Studies
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-200">
						Read about how RoseTech have implemented software,
						strategy and process for our clients.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{caseStudies.map((post) => {
						if (post.client)
							return (
								<Link
									href={post.href}
									key={post.id}
									className="relative isolate flex flex-row justify-between overflow-hidden rounded-2xl py-8 gap-4 shadow-lg cursor-pointer bg-black ring-1 ring-tertiary-500 hover:scale-105 transition duration-300 ease-in-out"
								>
									<div className="px-8 flex basis-2/3 flex-col text-base">
										<div className="fill-white flex justify-start w-24 h-auto mb-6">
											{post.client.svg}
										</div>
										<div>
											<dt className="inline font-semibold">
												{post.name ?? post.client.name}.
											</dt>{' '}
											<p className="inline text-gray-200">
												{post.description}
											</p>
										</div>
									</div>
									<div className="flex basis-1/3">
										<img
											src={`/our-work/thumbnails/${post.bgUrl}`}
											alt=""
											className="absolute -z-10 object-cover rotate-12 -translate-y-14 rounded-lg w-full h-96 shadow-lg"
											style={{
												objectPosition: 'left',
											}}
										/>
									</div>
								</Link>
							);
					})}
				</div>
			</div>
		</div>
	);
}
