import './globals.css';
import type { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
	title: 'RoseTech | Assessing Needs, Creating Solutions.',
	description: 'RoseTech drives organisations towards software success.',
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
		<html lang="en" className="h-full font-light">
			<body className="h-full">
				<Header></Header>
				{children}
				<Footer></Footer>
			</body>
		</html>
	);
}
