import { EnvelopeIcon } from '@heroicons/react/24/outline';

import { Metadata } from 'next';
import ContactForm from '@/app/components/contact-form';

export const metadata: Metadata = {
	title: 'Get in touch with RoseTech | RoseTech',
	description:
		"Ready to embark on your digital journey? Whether you have a budding idea, a specific project in mind, or simply want to learn more about how we can propel your business forward, we're here to help.",
	icons: {
		icon: '/icon.svg',
	},
};

export default function ContactUs() {
	return (
		<div className="relative isolate bg-black">
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
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
