'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useForm } from '@formcarry/react';

export default function ContactUs() {
	const { state, submit } = useForm({
		id: 'UTBNU2kwG9',
	});

	return (
		<div className="relative isolate bg-black">
			<img
				src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80&auto=format&w=2830&q=80&blend=111827&sat=-100&exp=5&blend-mode=multiply"
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-white">
							Get in touch
						</h2>
						<p className="mt-5 text-white">
							Ready to embark on your digital journey? Whether you
							have a budding idea, a specific project in mind, or
							simply want to learn more about how we can propel
							your business forward, we're here to help.
						</p>
					</div>
				</div>
				<div className="relative px-6 pb-20 sm:pt-32 lg:static lg:px-8 lg:pt-56">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<p className="mt-6 text-white">
							To get in touch, please either email us or fill in
							the contact form below.
						</p>
						<dl className="mt-4 space-y-4 text-base leading-7 text-white">
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Email</span>
									<EnvelopeIcon
										className="h-7 w-6 text-gray-400"
										aria-hidden="true"
									/>
								</dt>
								<dd>
									<a
										className="hover:text-white"
										href="mailto:hello@rose.tech"
									>
										hello@rose.tech
									</a>
								</dd>
							</div>
						</dl>
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
													className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
													className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
													className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
													className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
													className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
													defaultValue={''}
												/>
											</div>
										</div>
									</div>
									<div className="mt-8 flex justify-end">
										<button
											type="submit"
											className="rounded-md bg-primary-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
										>
											Send message
										</button>
									</div>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
