import fastIcon from '@/assets/icons/fast-and-easy.png'
import reachIcon from '@/assets/icons/get-more-social-media-followers.png'
import inventryIcon from '@/assets/icons/inventry-mgt.gif'
import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'
import { FaHandshake } from 'react-icons/fa'

export default function Benefits() {
	return (
		<article className="p-10">
			<h3 className="text-primary text-xs font-bold capitalize mb-3">
				What TenBits offers
			</h3>
			<p>
				Here are some of the amazing benefits your
				<span className="text-primary font-semibold"> TenBits e-Store </span>
				gives you.
			</p>
			<section className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,1fr))] gap-8 my-12">
				<div className="bg-slate-50 p-4 rounded-md">
					<Image
						src={fastIcon}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
					/>
					<h5 className="mt-2 text-primary capitalize font-bold">
						seamless setup
					</h5>
					<p className="mt-2 text-sm">
						Our user-friendly interface guides you through the process, helping
						you launch your online store without any technical hassle. No coding
						skills required – just your creative ideas!
					</p>
				</div>
				<div className="bg-slate-50 p-4 rounded-md">
					<div className="border border-primary p-2 aspect-square rounded-full flex w-fit">
						<Image
							src={reachIcon}
							height={30}
							width={30}
							objectFit="fill"
							loading="lazy"
						/>
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Expand your reach
					</h5>
					<p className="mt-2 text-sm">
						With built-in SEO optimization and social media integration, your
						online store will be primed for visibility. Reach new audiences and
						watch your sales soar.
					</p>
				</div>
				<div className="bg-slate-50 p-4 rounded-md">
					<Image
						src={inventryIcon}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
					/>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Effortless inventory management
					</h5>
					<p className="mt-2 text-sm">
						Keep track of your products with ease. Our intuitive inventory
						management system lets you update stock levels, add new items, and
						organize categories effortlessly
					</p>
				</div>
				<div className="bg-slate-50 p-4 rounded-md">
					<div className="text-primary border border-primary p-2 rounded-full flex w-fit">
						<FaHandshake className="text-2xl " />
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Establish credibility instantly
					</h5>
					<p className="mt-2 text-sm">
						Having your own professional e-commerce website lends an air of
						legitimacy to your business. Gain the trust of potential customers
						by showcasing your products and services in a sleek online
						storefront
					</p>
				</div>
			</section>
			<div className="w-full flex justify-center">
				<PrimaryBtn link="auth/register" text="register now" />
			</div>
		</article>
	)
}
