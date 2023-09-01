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
		href: '/case-studies/mta-immersion',
		description: `Product ownership, technical architecture, hiring and project management.`,
		bgUrl: 'mta.png',
		colour: '#402867',
		name: 'MTa Immersion',
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
		id: 7,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Sheffield Hallam University'
		),
		href: '/case-studies/pirate-plunder',
		description: `Design and development of a programming game to teach block-based procedural abstraction.`,
		colour: '#6F3092',
		bgUrl: 'pp.png',
		name: 'Pirate Plunder',
	},
	// {
	// 	id: 8,
	// 	client: clients(logoColour, logoWidth, logoHeight).find(
	// 		(c) => c.name === 'Lloyds Pharmacy'
	// 	),
	// 	href: '/case-studies/lloyds-pharmacy',
	// 	description: `Optimisation of animated advertising banner creation process using Figma.`,
	// 	colour: '#6F3092',
	// 	bgUrl: 'lp.png',
	// 	name: 'Advertising Banners',
	// },
];

export default function CaseStudies() {
	return (
		<div className="relative isolate bg-black">
			<div
				className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
				aria-hidden="true"
			>
				<div
					className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div
				className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
				aria-hidden="true"
			>
				<div
					className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
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
										className="relative isolate flex flex-row justify-between overflow-hidden rounded-2xl py-8 gap-4 shadow-lg cursor-pointer bg-black ring-1 ring-grey-500 hover:scale-105 transition duration-300 ease-in-out"
									>
										<div className="px-8 flex basis-2/3 flex-col text-base">
											<div className="fill-white flex justify-start w-24 h-auto mb-6">
												{post.client.svg}
											</div>
											<div>
												<dt className="inline font-semibold">
													{post.name ??
														post.client.name}
													.
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
		</div>
	);
}
