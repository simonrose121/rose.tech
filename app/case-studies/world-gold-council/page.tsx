import { clients } from '@/app/components/clients';
import {
	SquaresPlusIcon,
	TrophyIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'World Gold Council Case Study | RoseTech',
	description:
		'We designed and developed performant and user-friendly financial dashboards and websites for the World Gold Council.',
	icons: {
		icon: '/icon.svg',
	},
};

const stats = [
	{ label: 'Projects Delivered', value: '27' },
	{ label: 'Performance Boost', value: '60%' },
	{ label: 'User Satisfaction Rate', value: '90%' },
	{ label: 'Daily Visitors', value: '500,000' },
];

export default function CaseStudyWGC() {
	return (
		<div className="relative isolate py-24 sm:py-32">
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
								(c) => c.name === 'World Gold Council'
							)?.svg
						}
					</div>
					<p className="text-xl">
						We designed and developed performant and user-friendly
						financial dashboards and websites for the World Gold
						Council.
					</p>
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
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 sm:gap-y-16 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="max-w-2xl">
							<p>
								We worked with the World Gold Council (WGC)
								during our time at 542 Digital. 542's front-end
								team, led by Simon, implemented a suite of web
								applications using React, Redux, TypeScript and
								Next.js. This included both internal dashboards
								for WGC's analysts and user-facing websites to
								promote gold as an investment.
								<br />
								<br />
								Using our software development expertise, we
								ensured high-quality software using the
								following approach:
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<UserCircleIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Client-driven.
										</strong>{' '}
										We worked alongside key stakeholders at
										the World Gold Council to ensure we
										delivered software that met their
										complex requirements, and was delivered
										within budget and on time.
									</span>
								</li>
								<li className="flex gap-x-3">
									<SquaresPlusIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Maintainable and extendable.
										</strong>{' '}
										We implemented a reusable component
										library that shared logic between
										projects, ensuring maintainability and
										extendability. We also standardised a
										documentation approach, allowing the
										team to easily understand and extend the
										codebase. This meant that we could
										deliver new features quickly and with
										confidence.
									</span>
								</li>
								<li className="flex gap-x-3">
									<TrophyIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Performant.
										</strong>{' '}
										The large data sets we were working with
										presented performance challenges. We
										used bundle optimisation, lazy loading
										and caching to reduce time-to-load for
										users.
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
									Highcharts, JavaScript, SCSS, Docker,
									Kubernetes, Gitlab CI/CD, AWS, Storybook,
									Jest, Ant Design, Figma
								</dd>
							</div>
						</dl>
						<div className="mt-10 flex-col">
							<a
								href="https://www.gold.org/goldhub"
								className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
							>
								Goldhub →
							</a>
						</div>
						<div className="relative overflow-hidden">
							<img
								className="md:w-full mt-10 rounded-xl ring-1 ring-grey-500 w-[48rem]"
								src="/case-studies/wgc/qaurum.png"
								alt="Qaurum, a full-stack application that uses complex financial logic to determine gold's implied returns in a range of scenarios."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									Qaurum, a full-stack application that uses
									complex financial logic to determine gold's
									implied returns in a range of scenarios.
								</p>
							</figcaption>
						</div>
					</div>
					<div className="relative lg:col-span-5 lg:sticky overflow-hidden">
						<img
							className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[57rem]"
							src="/case-studies/wgc/gram.png"
							alt=""
						/>
						<figcaption className="mt-2 flex gap-x-4 text-sm">
							<p>
								GRAM (Gold Return Attribution Model), a
								front-end application that simplifies the
								historical analysis of gold price drivers.
							</p>
						</figcaption>
					</div>
				</div>
			</div>
		</div>
	);
}
