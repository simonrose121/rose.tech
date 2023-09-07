import { clients } from '@/app/components/clients';
import {
	AcademicCapIcon,
	CircleStackIcon,
	LockClosedIcon,
	PuzzlePieceIcon,
	WrenchIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import CaseStudyHeader from '../components/header';
import CaseStudyContent, {
	CaseStudyContentLeft,
	CaseStudyContentRight,
} from '../components/content';
import CaseStudyApproach from '../components/approach';
import CaseStudyList, { CaseStudyListItem } from '../components/list';
import CaseStudyTechnologies from '../components/technologies';
import CaseStudyTestimonial from '../components/testimonial';
import CaseStudyScreenshot from '../components/screenshot';
import CaseStudyProject from '../components/project';

export const metadata: Metadata = {
	title: 'Loughborough University Case Study | RoseTech',
	description:
		'RoseTech designed, developed and deployed bespoke software for two research projects for the Centre for Mathematical Cognition at Loughborough University.',
	icons: {
		icon: '/icon.svg',
	},
};

export default function CaseStudyLboro() {
	return (
		<>
			<CaseStudyHeader
				client="Loughborough University"
				introText="RoseTech designed, developed and deployed bespoke software for two research projects for the Centre for Mathematical Cognition at Loughborough University."
			/>
			<CaseStudyContent>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<p>
							We used our expertise in software development and
							experience conducting research in schools to deliver
							two bespoke and complex full-stack software systems
							using the following approach:
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<AcademicCapIcon />}
								title="Understanding research requirements"
							>
								Using our experience building software for
								research studies in schools, we were able to
								advise the key stakeholders on design,
								deployment and networking requirements.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<CircleStackIcon />}
								title="Data-driven"
							>
								We ensured that each application was built to
								track user interaction and progress. This data
								could then be exported from the admin portals in
								a usable format for analysis and publication.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<WrenchIcon />}
								title="Customisable and configurable"
							>
								We created admin sections in both applications
								to allow researchers to create, configure and
								customise assessments.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<PuzzlePieceIcon />}
								title="Gamified"
							>
								Both projects were designed to be used by
								children and needed to be fun and engaging. We
								used our UI/UX and game design expertise to
								design systems to motivate players to continue
								playing.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<LockClosedIcon />}
								title="Secure"
							>
								Research data is sensitive. We ensured the
								applications met the stringent ethical data
								security and GDPR requirements stipulated by the
								University.
							</CaseStudyListItem>
						</CaseStudyList>
					</CaseStudyApproach>
					<CaseStudyProject
						logoSrc="/case-studies/lboro/cft.png"
						technologies="TypeScript, Vue, Vuex, NodeJS, Express.js, MongoDB, CentOS"
						name="Cognitive Function Task"
						linkHref="https://www.cognitivefunctiontask.com/#/?task=btwn"
					>
						The Cognitive Function Task implements a method of
						assessing cognitive function across development designed
						by Kelly Trezise. It allows users to create and manage
						customised assessment tasks and view and export data
						produced when participants take those tasks. These tasks
						include trials that can be configured for things like
						targets, proportions and relationships to generate grids
						of shapes from a set of criteria. Tasks can then be
						installed individually on devices and run either online
						or offline, which is perfect for school testing.
					</CaseStudyProject>
					<CaseStudyProject
						logoSrc="/case-studies/lboro/numeralis.svg"
						technologies="TypeScript, Angular, RxJS, Firebase, Firestore, Figma"
						name="Numeralis"
					>
						Numeralis is a research application containing a set of
						activities to measure dyscalculia, designed by{' '}
						<a
							href="https://www.lboro.ac.uk/departments/mec/staff/kinga-morsanyi/"
							className="underline"
						>
							Kinga Morsanyi
						</a>
						. Numeralis has an admin section to handle users,
						assessments and data export. We implemented security
						improvements, including adding passwords and user
						permissions, and made some device compatibility
						improvements and added several extra activities,
						different question sets and made sure that activities
						correctly outputted and saved research data. There is a
						gamified version called 'Numeralis Adventure' that
						features 'worlds', a reward system and a selectable
						guide character.
					</CaseStudyProject>
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyTestimonial
						imageSrc="https://media.licdn.com/dms/image/C5603AQFLoY5RC6DLWA/profile-displayphoto-shrink_800_800/0/1624324173318?e=1697068800&v=beta&t=MuqGNiKrLb386QhUjrf1owcCY4JK22ZiYcWo_nxZFaU"
						name="Kelly Trezise"
						role="Research Fellow at Loughborough University"
					>
						Simon did a fantastic job on my app. The final product
						exceeded my expectations: it was visually appealing,
						looking far better than I had described in the brief,
						and the functionality was excellent, integrating all the
						complex elements of my design.
					</CaseStudyTestimonial>
					<CaseStudyScreenshot
						src="/case-studies/lboro/numeralis-home.png"
						caption="The homepage of the Numeralis application."
					/>
					<CaseStudyScreenshot
						src="/case-studies/lboro/cft-rules.png"
						caption="The rules page of the Cognitive Function Task application."
					/>
					<CaseStudyScreenshot
						src="/case-studies/lboro/cft-task.png"
						caption="The task configuration page of the Cognitive Function Task application."
					/>
				</CaseStudyContentRight>
			</CaseStudyContent>
		</>
	);
}
