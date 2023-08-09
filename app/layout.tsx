import './globals.css';
import type { Metadata } from 'next';
import Header from './header';

export const metadata: Metadata = {
	title: 'RoseTech | Assessing Needs, Architecting Solutions.',
	description:
		'Driving institutions and businesses towards software success.',
	icons: {
		icon: '/icon.svg',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Header></Header>
				{children}
			</body>
		</html>
	);
}
