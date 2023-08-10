'use client';

import { navigation } from './header';

export default function Footer() {
	return (
		<footer className="bg-black border-t border-white/10">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<nav
					className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
					aria-label="Footer"
				>
					{navigation.pages.map((item) => (
						<div key={item.name} className="pb-6">
							<a
								href={item.href}
								className="text-sm leading-6 text-white hover:text-gray-200"
							>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-10">
					{navigation.social.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-white hover:text-gray-200"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<p className="mt-10 text-center text-xs leading-5 text-gray-500">
					&copy; {new Date().getFullYear()} Rose Technologies Limited.
					All rights reserved.
				</p>
			</div>
		</footer>
	);
}
