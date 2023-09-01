import { clients } from '@/app/components/clients';
import {
	ArrowPathRoundedSquareIcon,
	ClockIcon,
	ExclamationTriangleIcon,
	PaintBrushIcon,
	SquaresPlusIcon,
	TrophyIcon,
	UserCircleIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';

const stats = [
	{ label: 'Projects Delivered', value: '27' },
	{ label: 'Performance Boost', value: '60%' },
	{ label: 'User Satisfaction Rate', value: '90%' },
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
						We designed and developed financial dashboards and
						websites for the World Gold Council.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<dl className="mt-0 flex justify-start gap-8 flex-col sm:flex-row sm:mt-10">
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
						<div className="mt-10 max-w-2xl">
							<p>
								We worked with WGC during our time at 542
								Digital. 542's front-end team, led by Simon,
								implemented a suite of web applications using
								React, Redux, TypeScript and Next.js. This
								included both internal dashboards for WGC's
								analysts and user-facing websites to promote
								gold as an investment.
							</p>
							<p className="mt-3">
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
										within budget and to deadline.
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
										We implemented a reusable library that
										shared logic between projects, and
										ensured that our code was
										well-documented and tested. This meant
										that we could deliver new features
										quickly and with confidence.
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
										used bundle optimisation and API
										endpoint caching to reduce time-to-load
										for users.
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
					<div className="relative mt-10 lg:col-span-5 lg:sticky lg:overflow-hidden">
						<img
							className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
							src="/our-work/wgc/gram.png"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
