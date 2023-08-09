type Testimonial = {
	logo: string;
	text: string;
	name: string;
	position: string;
	image: string;
};

export default function Testimonials() {
	const testimonials: Array<Testimonial> = [
		{
			logo: '542 Digital',
			text: `Simon is an exceptional software
			development expert who excels in JavaScript
			frameworks, TypeScript, UX design,
			programming best practices, team mentoring,
			and leadership.`,
			name: 'Henry Hughes',
			position: 'Technical Director at 542 Digital',
			image: 'https://media.licdn.com/dms/image/D4E35AQHo4zH2ntQgcg/profile-framedphoto-shrink_800_800/0/1678371481776?e=1692180000&v=beta&t=KyG1VRJcfFyDIDEaDYfUsez98oa1ZHIx3cFKFa51M1o',
		},
		{
			logo: '542 Digital',
			text: `Simon's technical background means that he is able to get involved with the day-to-day development work. He can work alongside other employees, whether it is as a mentor or as a member of the dev team. This understanding is a huge benefit when it comes to communicating technical knowledge to non-technical members of staff and integrating a development team into a business.`,
			name: 'Reece Charsville',
			position: 'Co-Founder & Back-end Developer at Forward Digital',
			image: 'https://media.licdn.com/dms/image/C4D03AQEiK9Ab_8XZkQ/profile-displayphoto-shrink_800_800/0/1523465480412?e=1697068800&v=beta&t=O_rvtM-luvSTn_oj0PYnlS-8ZrJJJjTdezGEVSrrp9Q',
		},
		{
			logo: 'MTa Learning',
			text: `Simon consistently impressed me with his exceptional technical and soft skills and ability to drive successful projects. His contributions were invaluable to the success of each project, and the processes implemented by him will carry forward into all future projects, ensuring their continued success.`,
			name: 'Steven Green',
			position: 'Lead Software Engineer at MTa Learning',
			image: 'https://media.licdn.com/dms/image/D4E03AQGOQ_CxD5gRsQ/profile-displayphoto-shrink_800_800/0/1665827015299?e=1697068800&v=beta&t=6qtubzOudLT80ldcQRxcYyHlyt3LCTBD561-84RoHp4',
		},
		{
			logo: '542 Digital',
			text: `Simon has been at the forefront of driving innovation and change in the frontend team and 542. His technical prowess is evident in how he moves deftly between frontend React/Typescript (including Next.js), to backend Express.js applications, and configuration of CI/CD pipelines.`,
			name: 'Oluwatobi Akanji',
			position: 'Front-end Software Engineer at 542 Digital',
			image: 'https://media.licdn.com/dms/image/C5603AQH7pxqbHCeENQ/profile-displayphoto-shrink_800_800/0/1626779961863?e=1697068800&v=beta&t=614rVbT0cjGtoKVtU-wd-k3cRhp0P3-OqsewUmuxKzY',
		},
		{
			logo: '542 Digital',
			text: `Simon's expertise has been instrumental in the ongoing success of our company. He joined us in June 2021 as a front-end developer and team leader and, in addition to those roles, he quickly grasped our business goals and challenges, and helped me and my co-Directors to make informed decisions about our growth strategy.`,
			name: 'Simon Walsworth',
			position: 'Director at 542 Digital',
			image: 'https://media.licdn.com/dms/image/C5603AQFzxrgTLgiwYg/profile-displayphoto-shrink_800_800/0/1517438923680?e=1697068800&v=beta&t=3kQDY03vIZN7WUceJU4KwNZrq01_Kz3ToXcQR5BA38I',
		},
		{
			logo: 'Loughborough University',
			text: `Simon did a fantastic job on my app. The
			final product exceeded my expectations: it
			was visually appealing, looking far better
			than I had described in the brief, and the
			functionality was excellent, integrating all
			the complex elements of my design.`,
			name: 'Kelly Tresize',
			position: 'Research Fellow at Loughborough University',
			image: 'https://media.licdn.com/dms/image/C5603AQFLoY5RC6DLWA/profile-displayphoto-shrink_800_800/0/1624324173318?e=1697068800&v=beta&t=MuqGNiKrLb386QhUjrf1owcCY4JK22ZiYcWo_nxZFaU',
		},
	];

	return (
		<div className="bg-black py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-center text-lg leading-8 text-white">
						Delivering results, time and again.
					</h2>
				</div>
				<div className="mx-auto flow-root max-w-2xl sm:mt-10 lg:mx-0 lg:max-w-none">
					<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.name}
								className="pt-8 sm:inline-block sm:w-full sm:px-4"
							>
								<figure className="rounded-2xl bg-gray-900 p-8 text-sm leading-6">
									<blockquote className="text-white">
										<p>{`“${testimonial.text}”`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<img
											className="h-10 w-10 rounded-full bg-gray-50"
											src={testimonial.image}
											alt=""
										/>
										<div>
											<div className="font-semibold text-white">
												{testimonial.name}
											</div>
											<div className="text-gray-300">{`${testimonial.position}`}</div>
										</div>
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
