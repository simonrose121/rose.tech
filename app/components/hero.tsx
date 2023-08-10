export default function Hero() {
	return (
		<div className="relative isolate px-6 pt-14 lg:px-8 border-b border-white/10">
			<img
				src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80&auto=format&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="mx-auto min-h-full max-w-2xl py-32 sm:py-48 lg:py-56">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						Assessing Needs,
						<br />
						<span className="text-primary-500">
							Creating Solutions.
						</span>
					</h1>
					<p className="mt-6 text-lg leading-8 text-white">
						Driving organisations towards software success.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#"
							className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
						>
							Get started
						</a>
						<a
							href="#"
							className="text-sm font-semibold leading-6 text-white"
						>
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
