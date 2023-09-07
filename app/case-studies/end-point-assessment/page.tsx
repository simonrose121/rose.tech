import {
	CodeBracketSquareIcon,
	IdentificationIcon,
	ScaleIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import CaseStudyHeader from '../components/header';
import CaseStudyApproach from '../components/approach';
import CaseStudyContent, {
	CaseStudyContentLeft,
	CaseStudyContentRight,
} from '../components/content';
import CaseStudyTechnologies from '../components/technologies';
import CaseStudyList, { CaseStudyListItem } from '../components/list';
import CaseStudyTestimonial from '../components/testimonial';
import CaseStudyScreenshot from '../components/screenshot';

export const metadata: Metadata = {
	title: 'End Point Assessment Case Study | RoseTech',
	description:
		'Simon created and implemented an end-point assessment process for an apprenticeship scheme run by Sheffield Hallam University.',
	icons: {
		icon: '/icon.svg',
	},
};

const stats = [
	{ label: 'Years Active', value: '4' },
	{ label: 'Apprentices Assessed', value: '91' },
	{ label: 'Companies Involved', value: '10' },
];

export default function CaseStudyEPA() {
	return (
		<>
			<CaseStudyHeader
				client="Sheffield Hallam University"
				stats={stats}
				introText="Simon created and implemented an end-point assessment process for the Digital and Technology Solutions Specialist Integrated Degree Apprenticeship (Software Engineering Specialism) run by Sheffield Hallam University."
			/>
			<CaseStudyContent>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<p>
							The Digital and Technology Solutions Specialist
							Integrated Degree Apprenticeship is used by software
							companies of varying sizes to develop their
							employees and gear them towards management. It
							requires apprentices to meet Knowledge, Skill and
							Behavioural requirements across business and change
							management, professional competencies, leadership,
							technology management and software engineering.
						</p>
						<p>
							Simon was employed by Sheffield Hallam University to
							create an end-point assessment process to assess
							these from the Government standard. Using our
							software engineering and academic experience, we
							created a standardised and rigorous assessment
							process using the following approach:
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<IdentificationIcon />}
								title="Adheres to the Government standard"
							>
								The Government standard specifies in broad terms
								how the assessment process should work and what
								stipulations should be followed. We follow this
								as best we can to ensure consistent grading
								across course providers.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<ScaleIcon />}
								title="Consistent and fair"
							>
								We ensure consistency and fairness through
								internal and external moderation,
								standardisation and a rigorous grading process
								with clear and actionable feedback if required.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<WrenchScrewdriverIcon />}
								title="Scalable and adaptable"
							>
								We follow a continuous improvement process each
								year to improve the process and ensure that it
								continues to meet the Government standard. We
								have produced clear onboarding documentation and
								since starting the EPA process, Simon has
								trained and onboarded two additional assessors
								using a training program that he created.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<CodeBracketSquareIcon />}
								title="Automation and project management"
							>
								We have automated the process where possible to
								allow the assessors to focus on grading rather
								than admin tasks. We use Trello to track
								apprentices through the process, with clear
								transparency for the Sheffield Hallam teaching
								team.
							</CaseStudyListItem>
						</CaseStudyList>
					</CaseStudyApproach>
					<CaseStudyTechnologies technologies="JavaScript, Node.js, Markdown" />
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyTestimonial
						imageSrc="https://media.licdn.com/dms/image/C5603AQGBe9uOvhqOvA/profile-displayphoto-shrink_800_800/0/1596204931900?e=1697068800&v=beta&t=snHnsi0YwvFC1ls2Ko-efVNTG3KwIdcDOQJULWr5Ih8"
						name="Tanni Moyana"
						role="Senior Lecturer at Sheffield Hallam University"
					>
						The EPA process and materials that Simon designed are
						incredibly clear, concise and leave no room for error.
						Simon has instilled a culture of continuous improvement,
						and is always looking for ways to tighten up the
						assessment process. Simon also leads and coordinates the
						moderation sessions to ensure a consistent grading
						approach, as well as feedback given to the teaching team
						at Sheffield Hallam.
					</CaseStudyTestimonial>
					<CaseStudyScreenshot
						src="/case-studies/epa/process.png"
						caption="A section of the EPA Training document."
						fullWidth
					/>
				</CaseStudyContentRight>
			</CaseStudyContent>
		</>
	);
}
