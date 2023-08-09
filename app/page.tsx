import Hero from './hero';
import Clients from './clients';
import { Metadata } from 'next';
import Testimonials from './testimonials';

export default function Home() {
	return (
		<main>
			<Hero></Hero>
			<Clients></Clients>
			<Testimonials></Testimonials>
		</main>
	);
}
