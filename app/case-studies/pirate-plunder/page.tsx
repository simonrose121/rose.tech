import { clients } from '@/app/components/clients';
import {
	CircleStackIcon,
	GiftIcon,
	LanguageIcon,
} from '@heroicons/react/24/outline';

const stats = [
	{ label: 'Players', value: '294' },
	{ label: 'Languages Supported', value: '2' },
	{ label: 'Research Publications', value: '5' },
];

export default function CaseStudyPP() {
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
								(c) => c.name === 'Sheffield Hallam University'
							)?.svg
						}
					</div>
					<p className="text-xl">
						Simon created Pirate Plunder for his PhD. The game aims
						to teach procedural abstraction using a block-based
						programming language.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<dl className="mt-0 flex justify-start gap-8 flex-wrap flex-row sm:mt-10">
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
						<div className="mt-10 max-w-2xl">
							<p>
								Pirate Plunder is a puzzle game where the player
								must program a ship to collect coins and
								treasure using loops and functions. It was shown
								to be effective in teaching children to use
								'custom blocks' for procedural abstraction in
								Scratch-based programming languages.
								<br />
								<br />
								Pirate Plunder has been used by the Federal
								Center for Technological Education of Rio de
								Janeiro as part of their programming curriculum.
								<br />
								<br />
								In the design and development of Pirate Plunder,
								we used the following approach:
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<CircleStackIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Data-first.
										</strong>{' '}
										Analytics and user tracking were
										essential in using Pirate Plunder for
										research and{' '}
										<a
											href="https://scholar.google.com/citations?user=wMWa2TkAAAAJ&hl=en"
											className="underline"
										>
											publishing results
										</a>
										. We implemented data collection to
										explore how children used the game
										features and the block-based programming
										environment.
									</span>
								</li>
								<li className="flex gap-x-3">
									<GiftIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Motivational design.
										</strong>{' '}
										Motivation is vital in educational
										tools. Pirate Plunder implements a
										currency system that rewards the player
										for completing levels optimally. Players
										can then spend their currency to
										customise their avatar, and can compare
										their avatars and their progress on a
										shared screen.
									</span>
								</li>
								<li className="flex gap-x-3">
									<LanguageIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Translatable.
										</strong>{' '}
										Pirate Plunder implements translations
										in an extendable and reusable way, and
										is currently translated into English and
										Brazilian Portuguese.
									</span>
								</li>
							</ul>
						</div>
						<div className="mt-10 flex-col">
							<a
								href="https://www.pirateplunder.app"
								className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
							>
								Pirate Plunder →
							</a>
						</div>
						<dl className="mt-10 flex justify-start gap-8 flex-col sm:flex-row">
							<div>
								<dt className="text-sm leading-6 text-grey-200">
									Technologies Used
								</dt>
								<dd className="text-md font-bold tracking-tight text-white">
									TypeScript, Angular, NodeJS, Express,
									MongoDB, Ubuntu
								</dd>
							</div>
						</dl>
						<div className="relative overflow-hidden">
							<img
								className="md:w-full mt-10 max-w-none rounded-xl ring-1 ring-grey-500 w-[48rem]"
								src="/case-studies/pp/pp-level.png"
								alt="The rules page of the Cognitive Function Task application."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									The rules page of the Cognitive Function
									Task application.
								</p>
							</figcaption>
						</div>
					</div>
					<div className="lg:col-span-5">
						<div className="relative p-1 lg:mt-10 lg:sticky overflow-hidden">
							<img
								className="w-full max-w-none rounded-xl ring-1 ring-grey-500 lg:w-[57rem]"
								src="/case-studies/pp/pp-home.png"
								alt="The level select screen of Pirate Plunder."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									The level select screen of Pirate Plunder.
								</p>
							</figcaption>
						</div>

						<div className="relative p-1 mt-10 lg:sticky lg:overflow-hidden">
							<img
								className="w-full max-w-none rounded-xl ring-1 ring-grey-500 lg:w-[57rem]"
								src="/case-studies/pp/pp-shop.png"
								alt="Pirate Plunder's shop, where players can spend coins they earn playing the game to customise their character."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									Pirate Plunder's shop, where players can
									spend coins they earn playing the game to
									customise their character.
								</p>
							</figcaption>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
