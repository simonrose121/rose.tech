import { clients } from '@/app/components/clients';
import {
	AcademicCapIcon,
	CircleStackIcon,
	LockClosedIcon,
	PuzzlePieceIcon,
	WrenchIcon,
} from '@heroicons/react/24/outline';

export default function CaseStudyLboro() {
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
						software for two research projects for the Centre for
						Mathematical Cognition at Loughborough University.
					</p>
				</div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="mt-10 max-w-2xl">
							<p className="mt-10">
								We used our expertise in software development
								and experience conducting research in schools to
								deliver two bespoke and complex full-stack
								software systems using the following approach:
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<AcademicCapIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Understanding research requirements.
										</strong>{' '}
										Using our experience building software
										for research studies in schools, we were
										able to advise the key stakeholders on
										design, deployment and networking
										requirements.
									</span>
								</li>
								<li className="flex gap-x-3">
									<CircleStackIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Data-driven.
										</strong>{' '}
										We ensured that each application was
										built to track user interaction and
										progress. This data could then be
										exported from the admin portals in a
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
										We created admin sections in both
										applications to allow researchers to
										create, configure and customise
										assessments.
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
										Research data is sensitive. We ensured
										the applications met the stringent
										ethical data security and GDPR
										requirements stipulated by the
										University.
									</span>
								</li>
							</ul>
						</div>
						<p className="mt-10">
							Read more about the two projects:
						</p>
						<div className="flex mt-5 bg-black ring-1 ring-grey-500 p-5 gap-5 rounded-lg flex-col">
							<img
								src="/our-work/lboro/cft.png"
								className="w-96"
							/>
							<p>
								The Cognitive Function Task implements a method
								of assessing cognitive function across
								development designed by Kelly Trezise. It allows
								users to create and manage customised assessment
								tasks and view and export data produced when
								participants take those tasks. These tasks
								include trials that can be configured for things
								like targets, proportions and relationships to
								generate grids of shapes from a set of criteria.
								Tasks can then be installed individually on
								devices and run either online or offline, which
								is perfect for school testing.
							</p>
							<dl className="flex justify-start gap-8 flex-col sm:flex-row">
								<div>
									<dt className="text-sm leading-6 text-grey-200">
										Technologies Used
									</dt>
									<dd className="text-md font-bold tracking-tight text-white">
										TypeScript, Vue, Vuex, NodeJS,
										Express.js, MongoDB, CentOS
									</dd>
								</div>
							</dl>
							<a
								href="https://www.cognitivefunctiontask.com/#/?task=btwn"
								className="w-fit rounded-md bg-primary-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
							>
								Cognitive Function Task →
							</a>
						</div>
						<div className="flex mt-10 bg-black ring-1 ring-grey-500 p-5 gap-5 rounded-lg flex-col">
							<img
								src="/our-work/lboro/numeralis.svg"
								className="w-96"
							/>
							<p>
								Numeralis is a research application containing a
								set of activities to measure dyscalculia,
								designed by{' '}
								<a
									href="https://www.lboro.ac.uk/departments/mec/staff/kinga-morsanyi/"
									className="underline"
								>
									Kinga Morsanyi
								</a>
								. Numeralis has an admin section to handle
								users, assessments and data export. We
								implemented security improvements, including
								adding passwords and user permissions, and made
								some device compatibility improvements and added
								several extra activities, different question
								sets and made sure that activities correctly
								outputted and saved research data. There is a
								gamified version called 'Numeralis Adventure'
								that features 'worlds', a reward system and a
								selectable guide character.
							</p>
							<dl className="flex justify-start gap-8 flex-col sm:flex-row">
								<div>
									<dt className="text-sm leading-6 text-grey-200">
										Technologies Used
									</dt>
									<dd className="text-md font-bold tracking-tight text-white">
										TypeScript, Angular, RxJS, Firebase,
										Firestore, Figma
									</dd>
								</div>
							</dl>
						</div>
					</div>
					<div className="lg:col-span-5">
						<figure className="lg:mt-10 border-l border-grey-500 pl-9">
							<blockquote className="italic">
								<p>
									“Simon did a fantastic job on my app. The
									final product exceeded my expectations: it
									was visually appealing, looking far better
									than I had described in the brief, and the
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
								className="w-full max-w-none rounded-xl ring-1 ring-grey-500 lg:w-[57rem]"
								src="/our-work/lboro/numeralis-home.png"
								alt="The homepage of the Numeralis application."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									The homepage of the Numeralis application.
								</p>
							</figcaption>
						</div>
						<div className="relative p-1 mt-10 lg:sticky lg:overflow-hidden">
							<img
								className="w-full max-w-none rounded-xl ring-1 ring-grey-500 lg:w-[57rem]"
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
						<div className="relative p-1 mt-10 lg:sticky lg:overflow-hidden">
							<img
								className="w-full max-w-none rounded-xl ring-1 ring-grey-500 lg:w-[57rem]"
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
