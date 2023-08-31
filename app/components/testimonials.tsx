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
			image: 'https://lh3.googleusercontent.com/a-/AD_cMMQOjnS1AhEqr2DA7D7YO8zxDEuM6b3JdkNHX1Mi0hFvxpc=s128-p-k-rw-no',
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
			logo: 'Sheffield Hallam University',
			text: 'Simon is exceptionally organised and is clear and concise in all aspects of his professional life. This is evident in the EPA process and materials that Simon designed (Simon onboarded myself and a colleague in the second year.) It is worth noting that the EPA role requires a high level of education along with strong corporate experience in software engineering, and in this regard Simon is the ideal assessor. Simon’s experience encourages trust and dependability, and makes him an excellent leader and assessor.',
			name: 'Tanni Moyana',
			position: 'Senior Lecturer at Sheffield Hallam University',
			image: 'https://media.licdn.com/dms/image/C5603AQGBe9uOvhqOvA/profile-displayphoto-shrink_800_800/0/1596204931900?e=1697068800&v=beta&t=snHnsi0YwvFC1ls2Ko-efVNTG3KwIdcDOQJULWr5Ih8',
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
		{
			logo: '542 Digital',
			text: `Simon distinguishes himself by effectively using software capabilities and daring to explore and implement viable and innovative solutions that push organizational growth and business success. His vision, enthusiasm, and relentless determination for transformative software enhancements will be invaluable to any individual, business, or organization.`,
			name: 'Wright Chukwuezi',
			position: 'Front-end Software Engineer at 542 Digital',
			image: 'https://media.licdn.com/dms/image/C5603AQHL_yMvRiq8Zg/profile-displayphoto-shrink_800_800/0/1581273297245?e=1697068800&v=beta&t=5z8jk3veVUO9FlM8ZAily2JnkhaekkKxSCa6jSAJODA',
		},
		{
			logo: '542 Digital',
			text: `As a team member and a leader, Simon is insightful, methodical, and flexible. These traits, coupled with immense measures of patience, make him an excellent manager of people, projects, and his own time. Working part-time in a 100% remote environment, I've seen him take the reins on and deliver quick-turnaround projects with cross-team dependencies, as well as implement new company processes over the course of months through consultation with stakeholders from junior to director level and the slow conversion of minds through action.`,
			name: 'Laurie Hayes',
			position: 'Project Manager at 542 Digital',
			image: 'https://media.licdn.com/dms/image/C4D03AQG_nxDa4FmFUA/profile-displayphoto-shrink_800_800/0/1660719129342?e=1697068800&v=beta&t=tR17kNWli4xNr5R8q9XQLmapbeLABG3h74k2aHd6fiA',
		},
	];

	return (
		<div className="bg-black py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-center text-lg leading-8 text-white">
						But don't take our word for it, see what our clients had
						to say.
					</h2>
				</div>
				<div className="mx-auto flow-root max-w-2xl mt-10 lg:mx-0 lg:max-w-none">
					<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.name}
								className="pt-8 sm:inline-block sm:w-full sm:px-4"
							>
								<figure className="rounded-2xl bg-black p-8 text-sm leading-6 shadow-md ring-1 ring-grey-500 ">
									<blockquote className="text-white">
										<p>{`“${testimonial.text}”`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<img
											className="h-10 w-10 rounded-full bg-gray-50 ring-1 ring-grey-500"
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
