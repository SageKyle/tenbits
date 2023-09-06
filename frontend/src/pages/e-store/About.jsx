import Link from 'next/link'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTiktok,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { IoCall } from 'react-icons/io5'

export default function About() {
	return (
		<section className="w-full min-h-[20rem] flex items-center justify-between flex-col p-8 bg-accent my-20 lg:flex-row">
			<article className="lg:w-1/2 h-full lg:pr-6">
				<h4 className="text-2xl font-semibold text-primary capitalize">
					about us
				</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					perferendis distinctio inventore sint! Officiis ipsum incidunt ipsa
					quas mollitia deserunt repudiandae tenetur quos distinctio enim. Nemo
					natus quos officia porro?
				</p>
			</article>

			<article className="lg:w-1/2 h-full lg:pl-6  lg:border-l-2 border-slate-200">
				<h4 className="text-2xl font-semibold text-primary capitalize">
					contact us
				</h4>
				<div className="flex items-start gap-2 mt-4">
					<HiLocationMarker className="text-primary text-3xl" />
					<p className="text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
						explicabo totam qui. Sapiente necessitatibus ab, vitae ipsam aperiam
						quam delectus?
					</p>
				</div>
				<section className="font-semibold">
					<div className="flex items-start gap-2 mt-4">
						<IoCall className="text-primary text-lg" />
						<Link href={'tel:+2348025215788'} className="text-sm">
							+234 802 521 5788
						</Link>
					</div>
					<div className="flex items-start gap-2 mt-4">
						<FaWhatsapp className="text-primary text-lg" />
						<p className="text-sm">+234 802 521 5788</p>
					</div>
					<div className="flex items-start gap-2 mt-4">
						<FaFacebook className="text-primary text-lg" />
						<Link href={'www.facebook.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-start gap-2 mt-4">
						<FaTwitter className="text-primary text-lg" />
						<Link href={'www.twitter.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-start gap-2 mt-4">
						<FaInstagram className="text-primary text-lg" />
						<Link href={'www.twitter.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-start gap-2 mt-4">
						<FaTiktok className="text-primary text-lg" />
						<Link href={'www.twitter.com'} target="_blank" className="text-sm">
							TenBits e-Store
						</Link>
					</div>
					<div className="flex items-start gap-2 mt-4">
						<HiMail className="text-primary text-lg" />
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
