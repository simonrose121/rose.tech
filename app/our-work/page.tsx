import { Client, clients } from '../components/clients';

const logoColour = 'white';
const logoWidth = '50px';
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
		href: '/our-work/542-digital',
		description: `Technical strategy implementation, process transformation and growth consultancy.`,
		bgUrl: '542.png',
		colour: '#2C68FF',
	},
	{
		id: 2,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'World Gold Council'
		),
		href: '/our-work/world-gold-council',
		description: `Financial dashboards using a performant and reusable solution.`,
		bgUrl: 'wgc.png',
		colour: '#886116',
	},
	{
		id: 3,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'MTa Learning'
		),
		href: '/our-work/mta-learning',
		description: `Product ownership, technical architecture and project management.`,
		bgUrl: 'mta.png',
		colour: '#402867',
	},
	{
		id: 4,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Sheffield Hallam University'
		),
		href: '/our-work/end-point-assessment',
		description: `Creating and conducting an assessment process for the next generation of tech leaders.`,
		colour: '#B6004C',
		bgUrl: 'epa.png',
		name: 'End Point Assessment',
	},
	{
		id: 5,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Loughborough University'
		),
		href: '/our-work/cognitive-function-task',
		description: `Building a gamified assessment system to measure dyscalculia in children .`,
		colour: '#6F3092',
		bgUrl: 'numeralis.png',
		name: 'Numeralis',
	},
	{
		id: 5,
		client: clients(logoColour, logoWidth, logoHeight).find(
			(c) => c.name === 'Loughborough University'
		),
		href: '/our-work/cognitive-function-task',
		description: `Building a gamified assessment system to measure cognitive function.`,
		colour: '#6F3092',
		bgUrl: 'cft.png',
		name: 'Cognitive Function Task',
	},
];

export default function CaseStudies() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Our Work
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-200">
						Read about how RoseTech have implemented software,
						strategy and process for our clients.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{caseStudies.map((post) => {
						if (post.client)
							return (
								<article
									key={post.id}
									className="relative isolate flex flex-col justify-between overflow-hidden rounded-2xl py-8 gap-4 shadow-md cursor-pointer bg-gray-900 hover:scale-105 transition duration-300 ease-in-out"
								>
									<img
										src={`/our-work/thumbnails/${post.bgUrl}`}
										alt=""
										className="absolute -z-10 object-cover mix-blend-screen rotate-12 translate-x-52 translate-y-20 rounded-lg opacity-20"
									/>
									<div className="px-8 flex flex-col gap-4">
										<div className="fill-white flex justify-start w-24 h-auto">
											{post.client.svg}
										</div>
										<h2 className="font-semibold">
											{post.name ?? post.client.name}
										</h2>
										<p className="flex">
											{post.description}
										</p>
									</div>
								</article>
							);
					})}
				</div>
			</div>
		</div>
	);
}
