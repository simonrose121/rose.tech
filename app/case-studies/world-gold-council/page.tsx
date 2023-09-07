import {
	SquaresPlusIcon,
	TrophyIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import CaseStudyHeader from '../components/header';
import CaseStudyContent, {
	CaseStudyContentLeft,
	CaseStudyContentRight,
} from '../components/content';
import CaseStudyApproach from '../components/approach';
import { Stats } from '../components/stats';
import CaseStudyList, { CaseStudyListItem } from '../components/list';
import CaseStudyTechnologies from '../components/technologies';
import Button from '@/app/components/button';
import CaseStudyScreenshot from '../components/screenshot';

export const metadata: Metadata = {
	title: 'World Gold Council Case Study | RoseTech',
	description:
		'We designed and developed performant and user-friendly financial dashboards and websites for the World Gold Council.',
	icons: {
		icon: '/icon.svg',
	},
};

const stats: Array<Stats> = [
	{ label: 'Projects Delivered', value: '27' },
	{ label: 'Performance Boost', value: '60%' },
	{ label: 'User Satisfaction Rate', value: '90%' },
	{ label: 'Daily Visitors', value: '500,000' },
];

export default function CaseStudyWGC() {
	return (
		<>
			<CaseStudyHeader
				client="World Gold Council"
				stats={stats}
				introText="We designed and developed performant and user-friendly financial dashboards and websites for the World Gold Council."
			/>
			<CaseStudyContent>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<p>
							We worked with the World Gold Council (WGC) during
							our time at 542 Digital. 542's front-end team, led
							by Simon, implemented a suite of web applications
							using React, Redux, TypeScript and Next.js. This
							included both internal dashboards for WGC's analysts
							and user-facing websites to promote gold as an
							investment.
						</p>
						<p>
							Using our software development expertise, we ensured
							high-quality software using the following approach:
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<UserCircleIcon />}
								title="Client-driven"
							>
								We worked alongside key stakeholders at the
								World Gold Council to ensure we delivered
								software that met their complex requirements,
								and was delivered within budget and on time.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<SquaresPlusIcon />}
								title="Maintainable and extendable"
							>
								We implemented a reusable component library that
								shared logic between projects, ensuring
								maintainability and extendability. We also
								standardised a documentation approach, allowing
								the team to easily understand and extend the
								codebase. This meant that we could deliver new
								features quickly and with confidence.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<TrophyIcon />}
								title="Performant"
							>
								The large data sets we were working with
								presented performance challenges. We used bundle
								optimisation, lazy loading and caching to reduce
								time-to-load for users.
							</CaseStudyListItem>
						</CaseStudyList>
					</CaseStudyApproach>
					<CaseStudyTechnologies
						technologies="React, Next.js, Redux, TypeScript,
							Highcharts, JavaScript, SCSS, Docker,
							Kubernetes, Gitlab CI/CD, AWS, Storybook,
							Jest, Ant Design, Figma"
					/>
					<Button
						href="https://www.gold.org/goldhub"
						text="Goldhub"
						external
					/>
					<CaseStudyScreenshot
						src="/case-studies/wgc/qaurum.png"
						caption="Qaurum, a full-stack application that uses complex financial logic to determine gold's implied returns in a range of scenarios."
						fullWidth
					/>
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyScreenshot
						src="/case-studies/wgc/gram.png"
						caption="GRAM (Gold Return Attribution Model), a front-end application that simplifies the historical analysis of gold price drivers."
					/>
				</CaseStudyContentRight>
			</CaseStudyContent>
		</>
	);
}
