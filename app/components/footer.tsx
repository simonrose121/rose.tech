'use client';

import { navigation } from './header';

export default function Footer() {
	return (
		<footer className="bg-black border-t border-white/10">
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<div className="flex justify-center">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">RoseTech</span>
						<img className="h-8 w-auto" src="logo.svg" alt="" />
					</a>
				</div>
				<nav
					className="mt-6 text-center sm:flex sm:justify-center sm:gap-12"
					aria-label="Footer"
				>
					{navigation.pages.map((item) => (
						<div key={item.name} className="w-20">
							<a
								href={item.href}
								className="text-sm leading-6 text-white hover:text-gray-200"
							>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className="mt-6 flex justify-center space-x-10">
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
					<br />
					Rose Technologies Limited is a registered company in the UK
					with company number 13572983.
				</p>
			</div>
		</footer>
	);
}
