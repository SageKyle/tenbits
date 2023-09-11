import shopIcon from '@/assets/icons/shop.svg'
// import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'
import { IoPulseOutline, IoShareSocial } from 'react-icons/io5'
import { TbSocial } from 'react-icons/tb'

export default function Features() {
	return (
		<article className="p-10 block relative bg-accent z-[2]">
			{/* background clip path */}
			<div className="absolute block z-[-1] inset-0 bg-primary [clip-path:polygon(0_4%,_100%_0%,_100%_85%,_0%_100%)] md:bg-purple-lines bg-no-repeat bg-contain bg-right bg-blend-screen opacity-90"></div>

			<h3 className="text-orange text-xs font-bold capitalize mb-3">
				What makes TenBits stand out
			</h3>
			<p className="text-white">
				Here are some of the awesome features baked into{' '}
				<span className="text-accent font-semibold">TenBits e-Store</span>.
			</p>
			<section className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,1fr))] gap-6 flex-wrap my-12">
				<div className=" bg-slate-50 p-4 rounded-md shadow-md">
					<div className="border border-primary p-2 rounded flex w-fit">
						<Image
							src={shopIcon}
							height={30}
							width={30}
							objectFit="fill"
							loading="lazy"
							className=""
						/>
					</div>
					<h5 className="mt-2 capitalize text-primary font-bold">
						your e-commerce marketplace
					</h5>
					<p className="mt-2 text-sm">
						Display your products in style. Showcase high-quality images,
						detailed descriptions, and multiple product views to entice
						customers and drive sales.
					</p>
				</div>
				<div className=" bg-slate-50 p-4 rounded-md">
					<div className="text-primary border border-primary p-2 rounded flex w-fit">
						<IoPulseOutline className="text-2xl " />
					</div>
					<h5 className="mt-2 capitalize text-primary font-bold">
						Built with SEO in mind
					</h5>
					<p className="mt-2 text-sm">
						Get noticed by search engines and potential customers. Our built-in
						SEO tools make it easy to optimize your website's content, so you
						rank higher in search results
					</p>
				</div>
				<div className=" bg-slate-50 p-4 rounded-md">
					<div className="text-primary border border-primary p-2 rounded flex w-fit">
						<IoShareSocial className="text-2xl " />
					</div>
					<h5 className="mt-2 capitalize text-primary font-bold">
						A simple link to your online world
					</h5>
					<p className="mt-2 text-sm">
						Elevate your brand presence. Get a free, unique and memorable link
						to share with your customers to make your business stand out.
					</p>
				</div>
				<div className=" bg-slate-50 p-4 rounded-md shadow-md">
					<div className="text-primary border border-primary p-2 rounded flex w-fit">
						<TbSocial className="text-2xl " />
					</div>
					<h5 className="mt-2 capitalize text-primary font-bold">
						Social media integration
					</h5>
					<p className="mt-2 text-sm">
						Expand your online presence seamlessly. Integrate your social media
						accounts to connect with customers, promote your products, and drive
						traffic to your store
					</p>
				</div>
			</section>
			{/* <div className="w-full flex justify-center">
				<PrimaryBtn
					link="auth/register"
					styles={'shadow-md'}
					text="register now"
				/>
			</div> */}
		</article>
	)
}
