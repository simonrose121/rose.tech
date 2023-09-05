'use client';

import Link from 'next/link';
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
					className="mt-10 text-center flex justify-center flex-col sm:flex-row sm:gap-12"
					aria-label="Footer"
				>
					{navigation.pages.map((item) => (
						<div key={item.name} className="sm:w-24 w-full">
							<a
								href={item.href}
								className="text-sm leading-6 text-white hover:text-gray-200"
							>
								{item.name}
							</a>
						</div>
					))}
					<div className="sm:w-24 w-full">
						<a
							href="/contact-us"
							className="text-sm leading-6 text-white hover:text-gray-200"
						>
							Contact Us
						</a>
					</div>
				</nav>
				<p className="mt-10 text-center text-xs leading-5 text-grey-300">
					&copy; {new Date().getFullYear()} Rose Technologies Limited.
					All rights reserved.{' '}
					<Link href="/terms-and-conditions" className="underline">
						Terms and Conditions.
					</Link>{' '}
					<Link href="/privacy-policy" className="underline">
						Privacy Policy.
					</Link>
					<br />
					Rose Technologies Limited is a registered company in the UK
					with company number 13572983.
				</p>
			</div>
		</footer>
	);
}
