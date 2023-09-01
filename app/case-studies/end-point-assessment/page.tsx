import { clients } from '@/app/components/clients';
import {
	CodeBracketSquareIcon,
	IdentificationIcon,
	ScaleIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const stats = [
	{ label: 'Years Active', value: '4' },
	{ label: 'Apprentices Assessed', value: '91' },
	{ label: 'Businesses', value: '10' },
];

export default function CaseStudyEPA() {
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
						Simon created and implemented an end-point assessment
						process for the Digital and Technology Solutions
						Specialist Integrated Degree Apprenticeship (Software
						Engineering Specialism) run by Sheffield Hallam
						University.
					</p>
				</div>
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-0 lg:max-w-none lg:grid-cols-12">
					<div className="max-w-xl text-base leading-7 lg:col-span-7">
						<dl className="mt-0 flex justify-start gap-8 flex-wrap flex-row sm:mt-10">
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
								The Digital and Technology Solutions Specialist
								Integrated Degree Apprenticeship (Software
								Engineering Specialism) is a 3-year course used
								by software companies of varying sizes to
								develop their employees and gear them towards
								management. It requires apprentices to meet
								Knowledge, Skill and Behavioural requirements
								across business and change management,
								professional competencies, leadership,
								technology management and software engineering.
								<br />
								<br />
								Simon was employed by Sheffield Hallam
								University to create an end-point assessment
								process from the Government standard in 2020.
								Using our software engineering and academic
								experience, we created a standardised and
								rigorous assessment process using the following
								approach:
							</p>
							<ul role="list" className="mt-8 max-w-xl space-y-8">
								<li className="flex gap-x-3">
									<IdentificationIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Adheres to the Government standard.
										</strong>{' '}
										The Government standard specifies in
										broad terms how the assessment process
										should work and what stipulations should
										be followed. We follow this as best we
										can to ensure consistent grading across
										course providers.
									</span>
								</li>
								<li className="flex gap-x-3">
									<ScaleIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Consistent and fair.
										</strong>{' '}
										The EPA process sits at the end of a
										3-year course and a lot of hard work for
										each apprentice. We ensure consistency
										and fairness through moderation,
										standardisation and a rigorous grading
										process with clear and actionable
										feedback if required.
									</span>
								</li>
								<li className="flex gap-x-3">
									<WrenchScrewdriverIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Scalable and adaptable.
										</strong>{' '}
										We follow a continuous improvement
										process each year to ensure the
										assessments continue to meet the
										Government standard, whilst providing
										consistent assessment for the current
										cohort. Since starting the EPA process,
										Simon has trained and onboarded two
										additional assessors using a training
										program that he created.
									</span>
								</li>

								<li className="flex gap-x-3">
									<CodeBracketSquareIcon
										className="mt-1 h-5 w-5 flex-none text-primary-500"
										aria-hidden="true"
									/>
									<span>
										<strong className="font-semibold">
											Automation and project management.
										</strong>{' '}
										We have automated the document
										generation process, and use Trello to
										track apprentices through the process.
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="lg:col-span-5">
						<figure className="lg:mt-10 border-l border-grey-500 pl-9">
							<blockquote className="italic">
								<p>
									“The EPA process and materials that Simon
									designed [...] are incredibly clear, concise
									and leave no room for error. Simon has
									instilled a culture of continuous
									improvement, and is always looking for ways
									to tighten up the assessment process. Simon
									also leads and coordinates the moderation
									sessions to ensure a consistent grading
									approach, as well as feedback given to the
									teaching team at Sheffield Hallam.”
								</p>
							</blockquote>
							<figcaption className="mt-6 flex gap-x-4">
								<img
									className="h-6 w-6 flex-none rounded-full bg-gray-50"
									src="https://media.licdn.com/dms/image/C5603AQGBe9uOvhqOvA/profile-displayphoto-shrink_800_800/0/1596204931900?e=1697068800&v=beta&t=snHnsi0YwvFC1ls2Ko-efVNTG3KwIdcDOQJULWr5Ih8"
									alt=""
								/>
								<div className="text-sm leading-6">
									<strong className="font-semibold">
										Tanni Moyana
									</strong>{' '}
									– Senior Lecturer at Sheffield Hallam
									University
								</div>
							</figcaption>
						</figure>
						<div className="relative p-1 mt-10 lg:sticky overflow-hidden">
							<img
								className="w-[48rem] max-w-none rounded-xl sm:w-[57rem]"
								src="/our-work/epa/process.png"
								alt=""
							/>
							<figcaption className="mt-2 flex gap-x-4 text-sm">
								<p>A section of the EPA Training document.</p>
							</figcaption>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
