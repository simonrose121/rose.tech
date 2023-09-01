import { clients } from '@/app/components/clients';
import {
	AcademicCapIcon,
	ChatBubbleLeftRightIcon,
	ComputerDesktopIcon,
	GlobeEuropeAfricaIcon,
	LockClosedIcon,
	PuzzlePieceIcon,
	SquaresPlusIcon,
	UserCircleIcon,
	ViewColumnsIcon,
	WrenchIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const stats = [{ label: 'Projects Delivered', value: '2' }];

export default function CaseStudyMTa() {
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
								(c) => c.name === 'Loughborough University'
							)?.svg
						}
					</div>
					<p className="text-xl">
						RoseTech designed, developed and deployed bespoke
						software for two research projects for the Mathematical
						Cognition at Loughborough University at Loughborough
						University.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						{/* <dl className="mt-0 flex justify-start gap-8 flex-wrap flex-row sm:mt-10">
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
						</dl> */}
						<div className="mt-10 max-w-2xl">
							<p>
								Using our expertise in software development and
								experience conducting research in schools, we
								delivered two bespoke and complex software
								systems using the following approach:
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<AcademicCapIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Understanding education research
											requirements.
										</strong>{' '}
										We have experience conducting research
										studies using bespoke software in
										schools. This meant we knew what was
										required to deliver both projects, and
										were able to advise the key stakeholders
										on networking and user interaction
										methods.
									</span>
								</li>
								<li className="flex gap-x-3">
									<UserCircleIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											User-driven.
										</strong>{' '}
										We ensured that each application was
										built using a user login system to track
										progress. As part of the requirements,
										the data could then be exported in a
										usable format for analysis and
										publication.
									</span>
								</li>
								<li className="flex gap-x-3">
									<WrenchIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Customisable and configurable.
										</strong>{' '}
										Both projects required an admin section
										to create, configure and customise
										assessments. We ensured that this was
										easy to use and met the client's
										requirements.
									</span>
								</li>
								<li className="flex gap-x-3">
									<PuzzlePieceIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Gamified.
										</strong>{' '}
										Both projects were designed to be used
										by children and needed to be fun and
										engaging. We used our UI/UX and game
										design expertise to design systems to
										motivate players to continue playing.
									</span>
								</li>
								<li className="flex gap-x-3">
									<LockClosedIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Secure.
										</strong>{' '}
										Research data is sensitive. Both
										projects had to be approved by the
										University ethics board and we ensured
										their requirements were implemented.
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
									TypeScript, Angular, RxJS, Vue, Vuex,
									Firebase, MongoDB, CentOS, Figma
								</dd>
							</div>
						</dl>
						<div className="relative">
							<img
								className="w-full mt-10 max-w-none rounded-xl ring-1 ring-grey-500"
								src="/our-work/lboro/numeralis-home.png"
								alt="The homepage of the Numeralis application."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									The homepage of the Numeralis application.
								</p>
							</figcaption>
						</div>
					</div>
					<div className="lg:col-span-5">
						<figure className="lg:mt-10 border-l border-grey-500 pl-9">
							<blockquote className="italic">
								<p>
									“Simon did a fantastic job on my app
									[Cognitive Function Task]. The final product
									exceeded my expectations: it was visually
									appealing, looking far better than I had
									described in the brief, and the
									functionality was excellent, integrating all
									the complex elements of my design.”
								</p>
							</blockquote>
							<figcaption className="mt-6 flex gap-x-4">
								<img
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
									src="https://media.licdn.com/dms/image/C5603AQFLoY5RC6DLWA/profile-displayphoto-shrink_800_800/0/1624324173318?e=1697068800&v=beta&t=MuqGNiKrLb386QhUjrf1owcCY4JK22ZiYcWo_nxZFaU"
									alt=""
								/>
								<div className="text-sm leading-6">
									<strong className="font-semibold">
										Kelly Trezise
									</strong>{' '}
									– Research Fellow at Loughborough University
								</div>
							</figcaption>
						</figure>
						<div className="relative p-1 mt-10 lg:sticky overflow-hidden">
							<img
								className="w-[48rem] max-w-none rounded-xl ring-1 ring-grey-500 sm:w-[57rem]"
								src="/our-work/lboro/cft-rules.png"
								alt="The rules page of the Cognitive Function Task application."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									The rules page of the Cognitive Function
									Task application.
								</p>
							</figcaption>
						</div>
						<div className="relative p-1 mt-10 lg:sticky overflow-hidden">
							<img
								className="w-[48rem] max-w-none rounded-xl ring-1 ring-grey-500 sm:w-[57rem]"
								src="/our-work/lboro/cft-task.png"
								alt="The task configuration page of the Cognitive Function Task application."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									The task configuration page of the Cognitive
									Function Task application.
								</p>
							</figcaption>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
