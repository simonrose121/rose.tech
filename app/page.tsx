import Hero from './hero';
import Clients from './clients';
import { Metadata } from 'next';

export default function Home() {
	return (
		<main>
			<Hero></Hero>
			<Clients></Clients>
		</main>
	);
}
