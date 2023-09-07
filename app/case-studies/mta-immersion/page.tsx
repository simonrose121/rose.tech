import {
	ChatBubbleLeftRightIcon,
	ComputerDesktopIcon,
	GlobeEuropeAfricaIcon,
	SquaresPlusIcon,
	ViewColumnsIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import { Stats } from '../components/stats';
import CaseStudyHeader from '../components/header';
import CaseStudyContent, {
	CaseStudyContentLeft,
	CaseStudyContentRight,
} from '../components/content';
import CaseStudyApproach from '../components/approach';
import CaseStudyList, { CaseStudyListItem } from '../components/list';
import CaseStudyTechnologies from '../components/technologies';
import CaseStudyScreenshot from '../components/screenshot';
import Button from '@/app/components/button';
import CaseStudyTestimonial from '../components/testimonial';

export const metadata: Metadata = {
	title: 'MTa Immersion Case Study | RoseTech',
	description:
		"RoseTech led on a successful rebuild of MTa Learning's online platform, MTa Immersion.",
	icons: {
		icon: '/icon.svg',
	},
};

const stats: Array<Stats> = [
	{ label: 'Projects Delivered', value: '18' },
	{ label: 'Activities Implemented', value: '5' },
	{ label: 'Bespoke Product', value: '1' },
	{ label: 'Subscriber Growth', value: '350%' },
];

export default function CaseStudyMTa() {
	return (
		<>
			<CaseStudyHeader
				client="MTa Learning"
				stats={stats}
				introText="RoseTech led on a successful rebuild of MTa Learning's online platform, MTa Immersion."
			/>
			<CaseStudyContent>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<p>
							MTa Immersion takes MTa Learning's successful
							experiential learning experiences online. MTa hired
							Simon as Chief Technology Officer after a failed
							attempt at implementing the platform using Unity and
							Photon.
						</p>
						<p>
							We used our software and project management
							expertise to rebuild the platform using the
							following approach:
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<GlobeEuropeAfricaIcon />}
								title="Networking and performance driven stack"
							>
								We tailored a bespoke stack to fit MTa
								Immersion's networking and performance
								requirements. This involved full-stack
								TypeScript and leverages AWS cloudfront to
								ensure a low-latency experience worldwide.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<SquaresPlusIcon />}
								title="Maintainable and extendable"
							>
								One of the core requirements from MTa was to be
								able to reuse and repackage core technologies to
								create new activities at low cost and short
								time-to-market. We implemented a generic API
								shared across all activities that enables
								extension and simplifies maintenance.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<ComputerDesktopIcon />}
								title="Product design"
							>
								To ensure we delivered activities to meet MTa's
								requirements, we designed the products using a
								Figma design system. This allowed us to harness
								the knowledge within the business, combined with
								latest in UI/UX research and client input, to
								produce user-friendly activities.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<ViewColumnsIcon />}
								title="Roadmapping and project management"
							>
								We used roadmaps combined with an Agile strategy
								to manage the platform implementation. This
								meant we could quickly implement changing user
								requirements and deliver a product that met the
								business's needs.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<ChatBubbleLeftRightIcon />}
								title="Strong external partnerships"
							>
								We selected and liaised with strong external
								software development and digital agencies to
								contribute towards the design and development of
								the platform.
							</CaseStudyListItem>
						</CaseStudyList>
					</CaseStudyApproach>
					<CaseStudyTechnologies technologies="TypeScript, React, Jotai, Next.js, NestJS, MongoDB, Socket.io, AWS, Figma" />
					<Button
						href="https://experientiallearning.org/online"
						text="MTa Immersion"
						external
					/>
					<CaseStudyScreenshot
						src="/case-studies/mta/chain-reaction.png"
						caption="Chain Reaction, a team-based negotiation activity that we built for MTa Immersion."
						fullWidth
					/>
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyTestimonial
						imageSrc="https://media.licdn.com/dms/image/D4E03AQGOQ_CxD5gRsQ/profile-displayphoto-shrink_800_800/0/1665827015299?e=1697068800&v=beta&t=6qtubzOudLT80ldcQRxcYyHlyt3LCTBD561-84RoHp4"
						name="Steven Green"
						role="Lead Software Engineer at MTa Learning"
					>
						As part of the rebuild, Simon demonstrated his ability
						to oversee and manage a multitude of projects, utilising
						cutting-edge technologies such as Nest.js, NextJS,
						TypeScript, AWS, MongoDB, and Socket.io. His expertise
						in architecting the solution used for implementation and
						ensuring a seamless integration of business requirements
						into the technical execution was apparent. Simon's
						strategic acumen in product strategy, road-mapping, and
						user journey mapping enabled us to maintain a clear
						vision and direction, allowing the team to focus on
						delivering the best possible product.
					</CaseStudyTestimonial>
					<CaseStudyScreenshot
						src="/case-studies/mta/nasa.png"
						caption="NASA Moon Survival, one of the activities we built for MTa Immersion based on the NASA Survival on the Moon exercise."
					/>
				</CaseStudyContentRight>
			</CaseStudyContent>
		</>
	);
}
