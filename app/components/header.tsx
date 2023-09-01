'use client';

import { JSX, SVGProps, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const navigation = {
	pages: [
		{ name: 'Home', href: '/' },
		{ name: 'Case Studies', href: '/case-studies' },
		// { name: 'Our Journey', href: '/our-journey' },
	],
	social: [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/company/rosetechnologieslimited/',
			icon: (
				props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
			) => (
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 448 512"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
				</svg>
			),
		},
	],
};

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">RoseTech</span>
						<img
							className="h-8 w-auto"
							src="logo.svg"
							alt="RoseTech Logo"
						/>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className={`-m-2.5 items-center justify-center rounded-md p-2.5 text-white ${
							mobileMenuOpen ? 'hidden' : 'inline-flex'
						}`}
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.pages.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm leading-6 text-white hover:text-gray-200 flex items-center"
						>
							{item.name}
						</a>
					))}
					<a
						href="/contact-us"
						className="rounded-md bg-primary-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
					>
						Contact Us
					</a>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">RoseTech</span>
							<img className="h-8 w-auto" src="logo.svg" alt="" />
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-white"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.pages.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
