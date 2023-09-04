import dayjs from 'dayjs';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'About Us | RoseTech',
	description: 'RoseTech was founded in early 2020 by Dr Simon Rose.',
	icons: {
		icon: '/icon.svg',
	},
};

export default function AboutUs() {
	const startDate = dayjs('2020-05-11');
	const endDate = dayjs(new Date());
	const yearsFromStart = endDate.diff(startDate, 'year') + 1;

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
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						About Us
					</h2>
					<p className="mt-2 text-lg leading-8 text-gray-200">
						RoseTech are into their {yearsFromStart}th year
						delivering software, strategy and process for our
						clients.
					</p>
				</div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="mt-10">
							<h3 className="text-2xl font-semibold">
								Who We Are
							</h3>
							<p className="my-5">
								RoseTech was founded in early 2020 by{' '}
								<Link
									href="https://www.simon-rose.co.uk"
									className="underline"
								>
									Dr Simon Rose
								</Link>
								. Simon has been developing software
								professionally since 2012, working both
								freelance and in-house whilst completing his
								Software Engineering degree and subsequent
								Masters. After completing his PhD in Computer
								Science and a COVID-curtailed backpacking trip,
								Simon started RoseTech with the aim of using his
								unique blend of software engineering experience,
								academic rigour and organisational skills to
								build software.
								<br />
								<br />
								Since then, RoseTech have been creating value
								for our clients through high-quality software
								development, pragmatic strategy and clear
								organisational processes. We've created software
								for{' '}
								<Link
									href="/case-studies/lougborough-university"
									className="underline"
								>
									academic projects
								</Link>
								, and have expanded into technology leadership
								across{' '}
								<Link
									href="/case-studies/world-gold-council"
									className="underline"
								>
									fintech
								</Link>{' '}
								and{' '}
								<Link
									href="/case-studies/mta-immersion"
									className="underline"
								>
									edtech
								</Link>{' '}
								projects. We've undertaken{' '}
								<Link
									href="/case-studies/end-point-assessment"
									className="underline"
								>
									academic assessment work
								</Link>{' '}
								and even some{' '}
								<Link
									href="/case-studies/542-digital"
									className="underline"
								>
									technical growth consultancy
								</Link>
								.
								<br />
								<br />
								RoseTech is a small company with big goals and
								we're excited for what the future will bring! If
								you're interested in talking to us,{' '}
								<Link href="/contact-us" className="underline">
									please get in touch.
								</Link>
							</p>
						</div>
					</div>
					<div className="sm:mt-10 lg:col-span-5">
						<img
							src="/about-us/chi.png"
							alt="Simon at CHI2019 in Scotland"
							className="rounded-xl ring-1 ring-grey-500"
						/>
						<figcaption className="mt-2 flex gap-x-4 text-sm">
							<p>
								Simon presenting a poster on{' '}
								<Link
									href="case-studies/pirate-plunder"
									className="underline"
								>
									Pirate Plunder
								</Link>{' '}
								at the 2019 ACM CHI Conference on Human Factors
								in Computing.
							</p>
						</figcaption>
					</div>
				</div>
			</div>
		</div>
	);
}
