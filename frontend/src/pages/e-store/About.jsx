import Link from 'next/link'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaMapMarked,
	FaTiktok,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'

export default function About() {
	return (
		<section className="w-full min-h-[20rem] flex items-center justify-center flex-col p-8 bg-primary text-accent my-20 lg:flex-row">
			<article className="lg:w-1/2 max-w-[35rem] h-full pb-6 border-b lg:border-0 border-gray-500 lg:pr-6">
				<h4 className="text-2xl font-semibold text-secondary capitalize">
					about us
				</h4>
				<p className="text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					perferendis distinctio inventore sint! Officiis ipsum incidunt ipsa
					quas mollitia deserunt repudiandae tenetur quos distinctio enim. Nemo
					natus quos officia porro?
				</p>
			</article>

			<article className="w-full max-w-[35rem] lg:w-1/2 h-full mt-4 lg:mt-0 lg:pl-6  lg:border-l border-gray-500">
				<h4 className="text-2xl font-semibold text-secondary capitalize lg:ml-4">
					contact us
				</h4>
				<div className="grid grid-cols-[1rem_auto] gap-2 items-center justify-start mt-4">
					<FaMapMarked className="text-secondary text-md" />
					<p className="text-sm inline-block">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
						dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<section className="font-semibold grid grid-cols-2">
					<div className="flex items-center gap-2 mt-4">
						<IoCall className="text-secondary text-md" />
						<Link href={'tel:+2348025215788'} className="text-sm">
							+234 802 521 5788
						</Link>
					</div>
					<div className="flex items-center gap-2 mt-4">
						<FaWhatsapp className="text-secondary text-md" />
						<p className="text-sm">+234 802 521 5788</p>
					</div>
					<div className="flex items-center gap-2 mt-4">
						<FaFacebook className="text-secondary text-md" />
						<Link href={'www.facebook.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-center gap-2 mt-4">
						<FaTwitter className="text-secondary text-md" />
						<Link href={'www.twitter.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-center gap-2 mt-4">
						<FaInstagram className="text-secondary text-md" />
						<Link href={'www.twitter.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-center gap-2 mt-4">
						<FaTiktok className="text-secondary text-md" />
						<Link href={'www.twitter.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-center gap-2 mt-4">
						<HiMail className="text-secondary text-md" />
						<Link
							href={'mailto:tenbits.store@gmail.com'}
							target="_blank"
							className="text-sm"
						>
							tenbits.store@gmail.com
						</Link>
					</div>
				</section>
			</article>
		</section>
	)
}
