import { clients } from '@/app/components/clients';
import {
	ArrowPathIcon,
	ArrowPathRoundedSquareIcon,
	ArrowTrendingUpIcon,
	BuildingStorefrontIcon,
	CodeBracketIcon,
	DocumentIcon,
	ListBulletIcon,
	PaintBrushIcon,
	PresentationChartLineIcon,
	RectangleStackIcon,
	UserGroupIcon,
	ViewColumnsIcon,
} from '@heroicons/react/24/outline';

const stats = [
	{ label: 'Projects Delivered', value: '27' },
	{ label: 'Company Growth', value: '400%' },
	{ label: 'Hires', value: '8' },
	{ label: 'Turnover', value: '£4m' },
];

export default function CaseStudy542() {
	return (
		<div className="relative isolate overflow-hidden py-24 sm:py-32">
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
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
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
								(c) => c.name === '542 Digital'
							)?.svg
						}
					</div>
					<p className="text-xl">
						We implemented sweeping technical, strategy and process
						changes across the business in the 21 months we worked
						with 542 Digital. Transforming the business in a time of
						rapid growth.
					</p>
					<dl className="mt-10 flex justify-start gap-8 flex-col sm:flex-row">
						{stats.map((stat, statIdx) => (
							<div key={statIdx}>
								<dt className="text-sm leading-6 text-grey-200">
									{stat.label}
								</dt>
								<dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-white">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="max-w-2xl">
							<h2 className="font-semibold text-xl relative">
								<CodeBracketIcon
									className="isolate w-10 h-10 mb-4 text-white"
									aria-hidden="true"
								/>
								Front-end Expansion
							</h2>
							<p className="mt-2">
								When Simon at RoseTech started working with 542
								Digital in July 2021, the front-end of their web
								applications had been implemented using vanilla
								JavaScript and jQuery. Whilst this was
								functional, an increase in project complexity
								meant that the front-end needed to be overhauled
								both technically and as a team.
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<RectangleStackIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Decoupled and overhauled the tech
											stack.
										</strong>{' '}
										We decoupled the front-end projects from
										a large PHP Laravel application,
										standardised the front-end tech stack to
										React/Redux and TypeScript and
										implemented a separate deployment
										pipeline using Gitlab CI/CD and AWS.
									</span>
								</li>
								<li className="flex gap-x-3">
									<UserGroupIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Built and led a front-end team.
										</strong>{' '}
										We hired and led a talented team of 5
										Software Engineers, 2 Product Designers
										and 1 Project Manager, delivering 26
										projects across our time at 542 Digital.
									</span>
								</li>
								<li className="flex gap-x-3">
									<ArrowPathRoundedSquareIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Implemented standards and process.
										</strong>{' '}
										We implemented industry standard project
										management and software engineering
										processes including Agile, versioning,
										code reviews, coding standards and
										automated testing.
									</span>
								</li>
								<li className="flex gap-x-3">
									<PaintBrushIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Design as part of the process.
										</strong>{' '}
										We created a Figma design system that
										allowed applications to be rapidly
										prototyped for client review before a
										line of code was written. This was then
										developed further when 542 hired Product
										Designers.
									</span>
								</li>
							</ul>
						</div>
						<dl className="mt-10 flex justify-start gap-8 flex-col sm:flex-row">
							<div>
								<dt className="text-sm leading-6 text-grey-200">
									Technologies Used
								</dt>
								<dd className="text-md font-bold tracking-tight text-white">
									React, Next.js, Redux, TypeScript,
									JavaScript, SCSS, Docker, Kubernetes, Gitlab
									CI/CD, AWS, Storybook, Jest, Ant Design,
									Figma
								</dd>
							</div>
						</dl>
					</div>
					<div className="relative lg:col-span-5">
						<figure className="lg:absolute lg:top-0 border-l border-grey-500 pl-9">
							<blockquote className="italic">
								<p>
									“Simon has been at the forefront of driving
									innovation and change in the frontend team
									and 542. First, he was instrumental in
									decoupling legacy React applications from a
									monolithic Laravel application, upgrading
									the technology stack to TypeScript and
									implementing code review, versioning and
									staggered deployment environments.”
								</p>
							</blockquote>
							<figcaption className="mt-6 flex gap-x-4">
								<img
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
									src="https://media.licdn.com/dms/image/C5603AQH7pxqbHCeENQ/profile-displayphoto-shrink_800_800/0/1626779961863?e=1697068800&v=beta&t=614rVbT0cjGtoKVtU-wd-k3cRhp0P3-OqsewUmuxKzY"
									alt=""
								/>
								<div className="text-sm leading-6">
									<strong className="font-semibold">
										Oluwatobi Akanji
									</strong>{' '}
									– Front-end Software Engineer at 542 Digital
								</div>
							</figcaption>
						</figure>
					</div>
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="max-w-2xl">
							<h2 className="font-semibold text-xl">
								<ArrowPathIcon
									className="isolate mb-4 w-10 h-10 text-white"
									aria-hidden="true"
								/>
								Business Process Improvements
							</h2>
							<p className="mt-2">
								542 grew from a small business (10 employees) to
								an SME (40 employees) during our time working
								with them. We led on implementing process across
								the business to ease this transition.
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<ListBulletIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Consistent process across teams.
										</strong>{' '}
										We led on implementing software
										development processes in the back-end
										team, as well as advising other teams on
										industry standard development practices.
									</span>
								</li>
								<li className="flex gap-x-3">
									<ViewColumnsIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Feasibility and project workflow.
										</strong>{' '}
										We worked with 542, their clients and
										other partners on project feasibility,
										requirements gathering and a staged
										project workflow.
									</span>
								</li>
								<li className="flex gap-x-3">
									<DocumentIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Standardised documentation.
										</strong>{' '}
										We implemented Notion as 542's central
										database for documentation and meeting
										notes, including templates for project
										management, software engineering and
										design.
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="relative lg:col-span-5">
						<figure className="lg:absolute lg:top-0 border-l border-grey-500 pl-9">
							<blockquote className="italic">
								<p>
									“Simon has been an absolute pleasure to work
									with during his time at 542 Digital. He
									joined the company at the start of a period
									of rapid growth. Throughout this, he has
									been a key lead in process improvements/
									implementation and also a leader in change
									management. Amongst other important work, he
									has led the change to implement agile
									processes within multiple teams.”
								</p>
							</blockquote>
							<figcaption className="mt-6 flex gap-x-4">
								<img
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
									src="https://media.licdn.com/dms/image/C4D03AQE-31tEwAgP-Q/profile-displayphoto-shrink_100_100/0/1570529214162?e=1698883200&v=beta&t=vOnGjbyqqvu6ejnZo_hOCyK7sR1uD7_iQPcxCSF6q34"
									alt=""
								/>
								<div className="text-sm leading-6">
									<strong className="font-semibold">
										Anna Muir
									</strong>{' '}
									– Director of Project Management at 542
									Digital
								</div>
							</figcaption>
						</figure>
					</div>
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="max-w-2xl">
							<h2 className="font-semibold text-xl">
								<ArrowTrendingUpIcon
									className="isolate w-10 h-10 mb-4 text-white"
									aria-hidden="true"
								/>
								Growth Consultancy
							</h2>
							<p className="mt-2">
								We advised 542 on handling growth throughout our
								time with them, culminating in a consultancy
								project presented to senior leadership.
							</p>
						</div>
						<ul role="list" className="mt-8 max-w-xl space-y-8">
							<li className="flex gap-x-3">
								<BuildingStorefrontIcon
									className="mt-1 h-5 w-5 flex-none text-primary-500"
									aria-hidden="true"
								/>
								<span>
									<strong className="font-semibold">
										Presentations to client.
									</strong>{' '}
									We gave several high level presentations to
									542's clients justifying increased costs due
									to necessary scaling based on their
									requirements.
								</span>
							</li>
							<li className="flex gap-x-3">
								<PresentationChartLineIcon
									className="mt-1 h-5 w-5 flex-none text-primary-500"
									aria-hidden="true"
								/>
								<span>
									<strong className="font-semibold">
										Consultancy project.
									</strong>{' '}
									We worked closely with 542's senior
									leadership team to capture the risks and
									opportunities of growth, and presented a
									consultancy project to them with
									recommendations.
								</span>
							</li>
						</ul>
					</div>
					<div className="relative lg:col-span-5">
						<figure className="lg:absolute lg:top-0 border-l border-grey-500 pl-9">
							<blockquote className="italic">
								<p>
									“Simon is an exceptional talent. His
									expertise has been instrumental in the
									ongoing success of our company. He joined us
									in June 2021 as a front-end developer and
									team leader and, in addition to those roles,
									he quickly grasped our business goals and
									challenges, and helped me and my
									co-Directors to make informed decisions
									about our growth strategy.”
								</p>
							</blockquote>
							<figcaption className="mt-6 flex gap-x-4">
								<img
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
									src="https://media.licdn.com/dms/image/C5603AQFzxrgTLgiwYg/profile-displayphoto-shrink_100_100/0/1517438923680?e=1698883200&v=beta&t=pgURUzXspikTV5UXWvxjBFDaeVoqKrUMENxfHvHHyx0"
									alt=""
								/>
								<div className="text-sm leading-6">
									<strong className="font-semibold">
										Simon Walsworth
									</strong>{' '}
									– Director at 542 Digital
								</div>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}
