import './globals.css';
import type { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';
import Analytics from './components/analytics';
import CookiesAlert from './components/cookies-alert';

export const metadata: Metadata = {
	title: 'RoseTech | Assessing Needs, Creating Solutions.',
	description: 'RoseTech drives organisations towards software success.',
	icons: {
		icon: '/icon.svg',
	},
	authors: [
		{
			name: 'Simon Rose',
			url: 'https://www.simon-rose.co.uk',
		},
	],
	openGraph: {
		title: 'RoseTech | Assessing Needs, Creating Solutions.',
		description: 'RoseTech drives organisations towards software success.',
		images: [
			{
				url: '/social.png',
				width: '1200',
				height: '627',
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full font-light scroll-smooth">
			<Analytics TrackingId="G-4V9LE726Q7" />
			<body className="h-full">
				<Header></Header>
				{children}
				<CookiesAlert></CookiesAlert>
				<Footer></Footer>
			</body>
		</html>
	);
}
