export default function Button({ href, text }: { href: string; text: string }) {
	return (
		<div>
			<a
				href={href}
				className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
			>
				{text}
			</a>
		</div>
	);
}
