import Image from 'next/image';
import Hero from './hero';
import Clients from './clients';

export default function Home() {
	return (
		<main>
			<Hero></Hero>
			<Clients></Clients>
		</main>
	);
}
