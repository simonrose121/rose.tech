import { clients } from './clients';

type Testimonial = {
	logo: string;
	text: string;
	name: string;
	position: string;
	image: string;
};

export default function Testimonials() {
	const clientIcons = clients('white', '50px', '');

	const testimonials: Array<Testimonial> = [
		{
			logo: '542 Digital',
			text: `Simon is an exceptional software
			development expert who excels in JavaScript
			frameworks, TypeScript, UX design,
			programming best practices, team mentoring,
			and leadership. His mastery of clean,
			efficient code and keen eye for intuitive
			design have greatly benefited our the
			development of 542's customer platforms. As
			a team mentor, Simon cultivates a culture of
			continuous learning, nurturing our team's
			skills and fostering a collaborative work
			environment. His leadership empowered and
			inspired others to reach their fullest
			potential. I wholeheartedly recommend Simon
			as a rare and invaluable asset to any
			organization seeking a lasting impact in
			software development.`,
			name: 'Henry Hughes',
			position: 'Technical Director at 542 Digital',
			image: 'https://media.licdn.com/dms/image/D4E35AQHo4zH2ntQgcg/profile-framedphoto-shrink_800_800/0/1678371481776?e=1692180000&v=beta&t=KyG1VRJcfFyDIDEaDYfUsez98oa1ZHIx3cFKFa51M1o',
		},
		{
			logo: 'Loughborough University',
			text: `Simon did a fantastic job on my app. He
			spent 3 months working with me on a project
			to make a highly adaptable research
			application. We were in regular contact
			through emails and meetings and he responded
			to all comments and feedback very well. The
			final product exceeded my expectations: it
			was visually appealing, looking far better
			than I had described in the brief, and the
			functionality was excellent, integrating all
			the complex elements of my design. All
			testing has worked extremely well and I am
			enjoying using the task for research
			purposes. The app is extremely easy to use
			for researchers and adult and child
			participants.`,
			name: 'Kelly Tresize',
			position: 'Research Fellow at Loughborough University',
			image: 'https://media.licdn.com/dms/image/C5603AQFLoY5RC6DLWA/profile-displayphoto-shrink_800_800/0/1624324173318?e=1697068800&v=beta&t=MuqGNiKrLb386QhUjrf1owcCY4JK22ZiYcWo_nxZFaU',
		},
	];

	return (
		<section className="bg-grey-900 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					{testimonials.map((testimonial) => {
						const client = clientIcons.find(
							(c) => c.name === testimonial.logo
						);
						return (
							<div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
								{client ? (
									<div style={client.styles}>
										{client.svg}
									</div>
								) : (
									<></>
								)}
								<figure className="mt-10 flex flex-auto flex-col justify-between">
									<blockquote className="text-lg leading-8 text-white">
										<p>“{testimonial.text}”</p>
									</blockquote>
									<figcaption className="mt-10 flex items-center gap-x-6">
										<img
											className="h-14 w-14 rounded-full bg-gray-50"
											src={testimonial.image}
											alt=""
										/>
										<div className="text-base">
											<div className="font-semibold text-white">
												{testimonial.name}
											</div>
											<div className="mt-1 text-gray-300">
												{testimonial.position}
											</div>
										</div>
									</figcaption>
								</figure>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
