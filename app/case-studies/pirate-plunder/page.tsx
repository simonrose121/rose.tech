import {
	CircleStackIcon,
	GiftIcon,
	LanguageIcon,
	PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import CaseStudyHeader from '../components/header';
import { Stats } from '../components/stats';
import CaseStudyContent, {
	CaseStudyContentRight,
	CaseStudyContentLeft,
} from '../components/content';
import CaseStudyList, { CaseStudyListItem } from '../components/list';
import Button from '@/app/components/button';
import CaseStudyTechnologies from '../components/technologies';
import CaseStudyScreenshot from '../components/screenshot';
import CaseStudyApproach from '../components/approach';

export const metadata: Metadata = {
	title: 'Pirate Plunder Case Study | RoseTech',
	description:
		'Pirate Plunder is a puzzle game that Simon created for his PhD, it teaches procedural abstraction using a block-based programming language.',
	icons: {
		icon: '/icon.svg',
	},
};

const stats: Array<Stats> = [
	{ label: 'Players', value: '300+' },
	{ label: 'Languages', value: '2' },
	{ label: 'Research Publications', value: '3' },
];

export default function CaseStudyPP() {
	return (
		<>
			<CaseStudyHeader
				client="Sheffield Hallam University"
				introText="Pirate Plunder is a puzzle game that Simon created for his PhD, it teaches procedural abstraction using a block-based programming language."
				stats={stats}
			/>
			<CaseStudyContent>
				<CaseStudyContentLeft>
					<CaseStudyApproach>
						<p>
							Pirate Plunder is a puzzle game where the player
							must program a ship to collect coins and treasure
							using loops and functions. It was shown to be
							effective in teaching children to use 'custom
							blocks' for procedural abstraction in Scratch-based
							programming languages.
						</p>
						<p>
							Pirate Plunder has been used by the Federal Center
							for Technological Education of Rio de Janeiro as
							part of their programming curriculum.
						</p>
						<p>
							In the design and development of Pirate Plunder, we
							used the following approach:
						</p>
						<CaseStudyList>
							<CaseStudyListItem
								icon={<CircleStackIcon />}
								title="Data-first"
							>
								Analytics and user tracking were essential in
								using Pirate Plunder for research and{' '}
								<a
									href="https://scholar.google.com/citations?user=wMWa2TkAAAAJ&hl=en"
									className="underline"
								>
									publishing results
								</a>
								. We implemented data collection to explore how
								children used the game features and the
								block-based programming environment.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<PuzzlePieceIcon />}
								title="Challenge-driven"
							>
								We harnessed the latest game design and
								computational thinking research to design levels
								that introduce programming concepts in a way
								that is challenging but not frustrating.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<GiftIcon />}
								title="Motivational design"
							>
								Motivation is vital in educational tools. Pirate
								Plunder implements a currency system that
								rewards the player for completing levels
								optimally. Players can then spend their currency
								to customise their avatar, and can compare their
								avatars and their progress on a shared screen.
							</CaseStudyListItem>
							<CaseStudyListItem
								icon={<LanguageIcon />}
								title="Translatable"
							>
								Pirate Plunder implements translations in an
								extendable and reusable way, and is currently
								translated into English and Brazilian
								Portuguese.
							</CaseStudyListItem>
						</CaseStudyList>
					</CaseStudyApproach>
					<Button
						href="https://pirateplunder.app"
						text="Pirate Plunder"
						external
					/>
					<CaseStudyTechnologies
						technologies="TypeScript, Angular, PixiJS, NodeJS, Express, MongoDB,
					Ubuntu"
					/>
					<CaseStudyScreenshot
						src="/case-studies/pp/pp-level.png"
						caption="A sample level from Pirate Plunder using a parameterised function to implement repeating functionality."
						fullWidth
					/>
				</CaseStudyContentLeft>
				<CaseStudyContentRight>
					<CaseStudyScreenshot
						src="/case-studies/pp/pp-home.png"
						caption="The level select screen of Pirate Plunder."
					/>
					<CaseStudyScreenshot
						src="/case-studies/pp/pp-shop.png"
						caption="Pirate Plunder's shop, where players can spend coins they earn playing the game to customise their character."
					/>
				</CaseStudyContentRight>
			</CaseStudyContent>
		</>
	);
}
