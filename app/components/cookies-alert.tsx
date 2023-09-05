'use client';

import { getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import React from 'react';

export default function CookiesAlert() {
	const hasAcknowledged = getCookie('acknowledgedBanner') ?? false;
	const [showCookiesAlert, setShowCookiesAlert] = React.useState(false);
	const clearCookieBanner = () => {
		setShowCookiesAlert(false);
		setCookie('acknowledgedBanner', true);
	};

	React.useEffect(() => {
		setShowCookiesAlert(!hasAcknowledged ?? true);
	}, []);

	return (
		showCookiesAlert && (
			<div className="w-96 fixed z-10 p-5 bg-black ring-1 ring-grey-500 bottom-5 right-5 rounded-xl">
				<div className="flex justify-between flex-col gap-6">
					<div className="flex flex-col flex-start">
						<h2 className="font-semibold">
							We care about your privacy
						</h2>
						<p>
							This website uses cookies for analytical purposes.
							By continuing to use our website you agree to our{' '}
							<Link href="/privacy-policy" className="underline">
								Privacy Policy
							</Link>
							.
						</p>
					</div>
					<div>
						<a
							onClick={clearCookieBanner}
							className="cursor-pointer rounded-md bg-primary-500 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-500"
						>
							OK
						</a>
					</div>
				</div>
			</div>
		)
	);
}
