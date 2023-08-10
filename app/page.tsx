import Hero from './hero';
import Clients from './clients';
import Testimonials from './testimonials';
import Services from './services';

export default function Home() {
	return (
		<main>
			<Hero></Hero>
			<Clients></Clients>
			<Services></Services>
			<Testimonials></Testimonials>
		</main>
	);
}
