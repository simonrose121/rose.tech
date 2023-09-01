import { clients } from '@/app/components/clients';
import {
	AcademicCapIcon,
	LockClosedIcon,
	PuzzlePieceIcon,
	UserCircleIcon,
	WrenchIcon,
} from '@heroicons/react/24/outline';

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
						programming language. It was built, deployed and used in
						schools for several research studies.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="mt-10 max-w-2xl">
							<p></p>
							<ul
								role="list"
								className="mt-8 max-w-xl space-y-8"
							></ul>
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
								src="/our-work/pp/pp-level.png"
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
								src="/our-work/pp/pp-home.png"
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
								src="/our-work/pp/pp-shop.png"
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
