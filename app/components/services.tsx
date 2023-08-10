import {
	ArrowPathRoundedSquareIcon,
	ArrowTrendingUpIcon,
	CodeBracketIcon,
	CubeTransparentIcon,
	RocketLaunchIcon,
	UserGroupIcon,
} from '@heroicons/react/20/solid';

const features = [
	{
		name: 'Software development.',
		description:
			'We build software using the latest technologies, ensuring every software solution is robust, relevant, and ready to meet the demands of your users.',
		icon: CodeBracketIcon,
	},
	{
		name: 'Technology transformation.',
		description:
			'We analyse, strategise and transform organisations to ensure they are ready for future challenges.',
		icon: ArrowTrendingUpIcon,
	},
	{
		name: 'Solution architecture.',
		description:
			'Successful software projects require vision. We design and build solution architecture using a pragmatic approach, ensuring a balance of innovation, integration, and reliability.',
		icon: CubeTransparentIcon,
	},
	{
		name: 'Building software teams.',
		description:
			'We hire engineers, designers and project managers to build software teams that are cohesive, talented and deliver exceptional results tailored to your needs.',
		icon: UserGroupIcon,
	},
	{
		name: 'Process implementation.',
		description:
			'We delve deep into your operational challenges to design and implement processes that improve the efficiency and effectiveness of your organisation.',
		icon: ArrowPathRoundedSquareIcon,
	},
	{
		name: 'Growth consultancy.',
		description:
			'We blend data-driven insights, innovation and experience to provide actionable strategies to propel your organisation towards sustainable software success.',
		icon: RocketLaunchIcon,
	},
];

export default function Services() {
	return (
		<div className="bg-black py-24 relative isolate sm:py-32 border-t border-b border-white/10">
			<img
				src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80&auto=format&w=2830&q=80&blend=111827&sat=-100&exp=5&blend-mode=multiply"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto lg:mx-0 text-center">
					<p className="mt-6 text-lg leading-8 text-white">
						Technology is everywhere, our expertise helps you
						navigate the digital landspace.
					</p>
				</div>
				<dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
					{features.map((feature) => (
						<div key={feature.name} className="relative pl-9">
							<dt className="inline font-semibold text-white">
								<feature.icon
									className="absolute left-1 top-1 h-5 w-5 text-primary-500"
									aria-hidden="true"
								/>
								{feature.name}
							</dt>{' '}
							<dd className="inline">{feature.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
