export default function CaseStudyScreenshot({
	src,
	caption,
	fullWidth = false,
}: {
	src: string;
	caption: string;
	fullWidth?: boolean;
}) {
	if (fullWidth) {
		return (
			<div className="relative overflow-hidden">
				<img
					className="md:w-full rounded-xl ring-1 ring-grey-500 w-[48rem]"
					src={src}
					alt={caption}
				/>
				<figcaption className="mt-2 flex gap-x-4 text-sm">
					<p>{caption}</p>
				</figcaption>
			</div>
		);
	}

	return (
		<div className="relative lg:sticky overflow-hidden">
			<img
				className="w-full max-w-none rounded-xl ring-1 ring-grey-500 lg:w-[57rem]"
				src={src}
				alt={caption}
			/>
			<figcaption className="mt-2 flex gap-x-4 text-sm">
				<p>{caption}</p>
			</figcaption>
		</div>
	);
}
