import {
	ArrowPathRoundedSquareIcon,
	BuildingStorefrontIcon,
	DocumentIcon,
	ListBulletIcon,
	PaintBrushIcon,
	PresentationChartLineIcon,
	RectangleStackIcon,
	UserGroupIcon,
	ViewColumnsIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import CaseStudyHeader from '../components/header';
import CaseStudyList, { CaseStudyListItem } from '../components/list';
import CaseStudyContent, {
	CaseStudyContentLeft,
	CaseStudyContentRight,
} from '../components/content';
import CaseStudyApproach from '../components/approach';
import CaseStudyTechnologies from '../components/technologies';
import CaseStudyTestimonial from '../components/testimonial';
import { Stats } from '../components/stats';

export const metadata: Metadata = {
	title: '542 Digital Case Study | RoseTech',
	description:
		'We implemented sweeping technical, strategy and process changes across the business in the 21 months we worked with 542 Digital. Transforming the business in a time of rapid growth.',
	icons: {
		icon: '/icon.svg',
	},
};

const stats: Array<Stats> = [
	{ label: 'Projects Delivered', value: '27' },
	{ label: 'Company Growth', value: '400%' },
	{ label: 'Hires', value: '8' },
];

export default function CaseStudy542() {
	return (
		<>
			<CaseStudyHeader
				client="542 Digital"
				introText="We implemented sweeping technical, strategy and process changes across the business in the 21 months we worked with 542 Digital. Transforming the business in a time of rapid growth."
				stats={stats}
			/>
			<CaseStudyContent>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<h2 className="font-semibold text-xl relative">
							Front-end Expansion
						</h2>
						<p>
							When RoseTech started working with 542 Digital in
							July 2021, their front-end web applications had been
							implemented using vanilla JavaScript and jQuery.
							Whilst this was functional, an increase in the
							number and complexity of projects meant that the
							front-end team needed expanding and the tech stack
							updated. Here's what we did:
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<RectangleStackIcon />}
								title="Decoupled and overhauled the tech stack"
							>
								We decoupled the front-end projects from a large
								PHP Laravel application and standardised the
								tech stack to React/Redux with TypeScript. We
								then implemented a separate staged deployment
								pipeline using Gitlab CI/CD and AWS to ensure
								reliable delivery.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<UserGroupIcon />}
								title="Built and led the front-end team"
							>
								We hired, led and managed a talented team of 5
								Software Engineers, 2 Product Designers and 1
								Project Manager. As a team, we delivered 27
								projects across our time at 542 Digital.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<ArrowPathRoundedSquareIcon />}
								title="Implemented standards and process"
							>
								We implemented industry standard project
								management and software engineering processes
								including Agile sprints, software versioning,
								code reviews, coding standards and automated
								testing.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<PaintBrushIcon />}
								title="Design and development coordination"
							>
								We created a Figma design system that allowed
								applications to be rapidly prototyped for client
								review before a line of code was written. This
								formed the basis of a component library we built
								to standardise components across our front-end
								applications.
							</CaseStudyListItem>
						</CaseStudyList>
						<CaseStudyTechnologies
							technologies="React, Next.js, Redux, TypeScript,
									JavaScript, SCSS, Docker, Kubernetes, Gitlab
									CI/CD, AWS, Storybook, Jest, Ant Design,
									Figma"
						/>
					</CaseStudyApproach>
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyTestimonial
						imageSrc="https://media.licdn.com/dms/image/C5603AQH7pxqbHCeENQ/profile-displayphoto-shrink_800_800/0/1626779961863?e=1697068800&v=beta&t=614rVbT0cjGtoKVtU-wd-k3cRhp0P3-OqsewUmuxKzY"
						name="Oluwatobi Akanji"
						role="Front-end Software Engineer at 542 Digital"
					>
						Simon has been at the forefront of driving innovation
						and change in the frontend team and 542. First, he was
						instrumental in decoupling legacy React applications
						from a monolithic Laravel application, upgrading the
						technology stack to TypeScript and implementing code
						review, versioning and staggered deployment
						environments.
					</CaseStudyTestimonial>
				</CaseStudyContentRight>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<h2 className="font-semibold text-xl relative">
							Business Process Improvements
						</h2>
						<p>
							542 grew from a small business (10 employees) to an
							SME (40 employees) during our time working with
							them. We led on implementing processes across the
							business to ease this transition.
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<ListBulletIcon />}
								title="Cross-team consistency"
							>
								We led on implementing software development
								processes across multiple development teams. We
								also advised other teams, such as Data, on
								industry standard development practices.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<ViewColumnsIcon />}
								title="Feasibility and project workflow"
							>
								We worked with 542, their clients and other
								partners on requirements gathering, estimations,
								project feasibility and a staged project
								workflow.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<DocumentIcon />}
								title="Standardised documentation"
							>
								We implemented Notion as 542's central database
								for documentation and meeting notes, including
								templates for project management, software
								engineering and design.
							</CaseStudyListItem>
						</CaseStudyList>
					</CaseStudyApproach>
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyTestimonial
						imageSrc="https://media.licdn.com/dms/image/C4D03AQE-31tEwAgP-Q/profile-displayphoto-shrink_100_100/0/1570529214162?e=1698883200&v=beta&t=vOnGjbyqqvu6ejnZo_hOCyK7sR1uD7_iQPcxCSF6q34"
						name="Anna Muir"
						role="Director of Project Management at 542
						Digital"
					>
						Simon at RoseTech has been an absolute pleasure to work
						with during his time at 542 Digital. He joined the
						company at the start of a period of rapid growth.
						Throughout this, he has been a key lead in process
						improvements/ implementation and also a leader in change
						management. Amongst other important work, he has led the
						change to implement agile processes within multiple
						teams.
					</CaseStudyTestimonial>
				</CaseStudyContentRight>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<h2 className="font-semibold text-xl relative">
							Growth Consultancy
						</h2>
						<p>
							We advised 542 on handling growth throughout our
							time with them, culminating in a consultancy project
							presented to senior leadership.
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<BuildingStorefrontIcon />}
								title="Presentations to client."
							>
								We gave several high-level presentations on
								process and projects to 542's clients justifying
								increased costs due to necessary scaling based
								on their requirements.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<PresentationChartLineIcon />}
								title="Growth at 542 consultancy project"
							>
								We worked closely with 542's senior leadership
								team to capture the risks and opportunities of
								growth. We then synthesised and presented the
								information with recommendations, before leading
								a discussion on the outcomes and actions.
							</CaseStudyListItem>
						</CaseStudyList>
					</CaseStudyApproach>
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyTestimonial
						imageSrc="https://media.licdn.com/dms/image/C5603AQFzxrgTLgiwYg/profile-displayphoto-shrink_100_100/0/1517438923680?e=1698883200&v=beta&t=pgURUzXspikTV5UXWvxjBFDaeVoqKrUMENxfHvHHyx0"
						name="Simon Walsworth"
						role="Director at 542 Digital"
					>
						Simon at RoseTech is an exceptional talent. His
						expertise has been instrumental in the ongoing success
						of our company. He joined us in June 2021 as a front-end
						developer and team leader and, in addition to those
						roles, he quickly grasped our business goals and
						challenges, and helped me and my co-Directors to make
						informed decisions about our growth strategy.
					</CaseStudyTestimonial>
				</CaseStudyContentRight>
			</CaseStudyContent>
		</>
	);
}
