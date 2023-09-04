import { clients } from '@/app/components/clients';
import {
	ChatBubbleLeftRightIcon,
	ComputerDesktopIcon,
	GlobeEuropeAfricaIcon,
	SquaresPlusIcon,
	ViewColumnsIcon,
} from '@heroicons/react/24/outline';

const stats = [
	{ label: 'Projects Delivered', value: '18' },
	{ label: 'Activities Implemented', value: '5' },
	{ label: 'Bespoke Product', value: '1' },
	{ label: 'Subscriber Growth', value: '350%' },
];

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
								(c) => c.name === 'MTa Learning'
							)?.svg
						}
					</div>
					<p className="text-xl">
						RoseTech led on a successful rebuild of MTa Learning's
						online platform, MTa Immersion.
					</p>
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
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<div className="mt-10 max-w-2xl">
							<p>
								MTa Immersion takes MTa Learning's successful
								experiential learning experiences online. MTa
								hired Simon as Chief Technology Officer after a
								failed attempt at implementing the platform
								using Unity and Photon.
								<br />
								<br />
								We used our software and project management
								expertise to rebuild the platform using the
								following approach:
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<GlobeEuropeAfricaIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Networking and performance driven
											stack.
										</strong>{' '}
										We tailored a bespoke stack to fit MTa
										Immersion's networking and performance
										requirements. This involved full-stack
										TypeScript and leverages AWS cloudfront
										to ensure a low-latency experience
										worldwide.
									</span>
								</li>
								<li className="flex gap-x-3">
									<SquaresPlusIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Maintainable and extendable
											codebase.
										</strong>{' '}
										One of the core requirements from MTa
										was to be able to reuse and repackage
										core technologies to create new
										activities at low cost and short
										time-to-market. We implemented a generic
										API shared across all activities that
										enables extension and simplifies
										maintenance.
									</span>
								</li>
								<li className="flex gap-x-3">
									<ComputerDesktopIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Product design.
										</strong>{' '}
										To ensure we delivered activities to
										meet MTa's requirements, we designed the
										products using a Figma design system.
										This allowed us to harness the knowledge
										within the business, combined with
										latest in UI/UX research and client
										input, to produce user-friendly
										activities.
									</span>
								</li>
								<li className="flex gap-x-3">
									<ViewColumnsIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Roadmapping and project management.
										</strong>{' '}
										We used roadmaps combined with an Agile
										strategy to manage the platform
										implementation. This meant we could
										quickly implement changing user
										requirements and deliver a product that
										met the business's needs.
									</span>
								</li>
								<li className="flex gap-x-3">
									<ChatBubbleLeftRightIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Strong external partnerships.
										</strong>{' '}
										We selected and liaised with strong
										external software development and
										digital agencies to contribute towards
										the design and development of the
										platform.
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
									TypeScript, React, Jotai, Next.js, NestJS,
									MongoDB, Socket.io, AWS, Figma
								</dd>
							</div>
						</dl>
						<div className="mt-10 flex-col">
							<a
								href="https://experientiallearning.org/online"
								className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
							>
								MTa Immersion →
							</a>
						</div>
						<div className="relative overflow-hidden">
							<img
								className="md:w-full mt-10 rounded-xl ring-1 ring-grey-500 w-[48rem]"
								src="/our-work/mta/chain-reaction.png"
								alt="Chain Reaction, a team-based negotiation activity that we built for MTa Immersion."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									Chain Reaction, a team-based negotiation
									activity that we built for MTa Immersion.
								</p>
							</figcaption>
						</div>
					</div>
					<div className="lg:col-span-5">
						<figure className="lg:mt-10 border-l border-grey-500 pl-9">
							<blockquote className="italic">
								<p>
									“As part of the rebuild, Simon demonstrated
									his ability to oversee and manage a
									multitude of projects, utilising
									cutting-edge technologies such as Nest.js,
									NextJS, TypeScript, AWS, MongoDB, and
									Socket.io. His expertise in architecting the
									solution used for implementation and
									ensuring a seamless integration of business
									requirements into the technical execution
									was apparent. Simon's strategic acumen in
									product strategy, road-mapping, and user
									journey mapping enabled us to maintain a
									clear vision and direction, allowing the
									team to focus on delivering the best
									possible product.”
								</p>
							</blockquote>
							<figcaption className="mt-6 flex gap-x-4">
								<img
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
									src="https://media.licdn.com/dms/image/D4E03AQGOQ_CxD5gRsQ/profile-displayphoto-shrink_800_800/0/1665827015299?e=1697068800&v=beta&t=6qtubzOudLT80ldcQRxcYyHlyt3LCTBD561-84RoHp4"
									alt=""
								/>
								<div className="text-sm leading-6">
									<strong className="font-semibold">
										Steven Green
									</strong>{' '}
									– Lead Software Engineer at MTa Learning
								</div>
							</figcaption>
						</figure>
						<div className="relative p-1 mt-10 lg:sticky overflow-hidden">
							<img
								className="w-full max-w-none rounded-xl ring-1 ring-grey-500 lg:w-[57rem]"
								src="/our-work/mta/nasa.png"
								alt="NASA Moon Survival, one of the activities we built for MTa Immersion based on the NASA Survival on the Moon exercise."
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>
									NASA Moon Survival, an activity we built for
									MTa Immersion based on the NASA Survival on
									the Moon exercise.
								</p>
							</figcaption>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
