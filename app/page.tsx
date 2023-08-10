import Hero from './components/hero';
import Clients from './components/clients';
import Testimonials from './components/testimonials';
import Services from './components/services';

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
