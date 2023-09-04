'use client';

import { useForm } from '@formcarry/react';

export default function ContactForm() {
	const { state, submit } = useForm({
		id: 'UTBNU2kwG9',
	});

	return (
		<>
			{state.submitted ? (
				<p className="mt-10 space-y-4 text-base leading-7 text-white">
					Thank you! We have received your submission.
				</p>
			) : (
				<form onSubmit={submit} className="pb-24 pt-10">
					<div className="max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									First name
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-grey-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Last name
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-grey-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Email
								</label>
								<div className="mt-2.5">
									<input
										type="email"
										name="email"
										id="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-grey-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Phone number
								</label>
								<div className="mt-2.5">
									<input
										type="tel"
										name="phone-number"
										id="phone-number"
										autoComplete="tel"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-grey-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm font-semibold leading-6 text-white"
								>
									How can we help you?
								</label>
								<div className="mt-2.5">
									<textarea
										name="message"
										id="message"
										rows={4}
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-grey-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								className="rounded-md bg-primary-500 px-3.5 py-2.5 text-center text-sm text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
							>
								Send message
							</button>
						</div>
					</div>
				</form>
			)}
		</>
	);
}
