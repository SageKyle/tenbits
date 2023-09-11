import PrimaryBtn from '@/components/PrimaryBtn'
import { DiGoogleAnalytics } from 'react-icons/di'
import { GiReceiveMoney } from 'react-icons/gi'
import { TbTruckDelivery } from 'react-icons/tb'

export default function ComingSoon() {
	return (
		<article className="p-10">
			<h3 className="text-orange-500 text-xs font-bold capitalize mb-3">
				More features on the way!
			</h3>
			<p className="text-xs">
				We are launching with just the basic features you need to showcase your
				products to your potential customers. However, soon you will be able to
				fully manage both your offline and online store using your e-Store.
			</p>
			<p className="text-xs">
				We are working on more features to help you easily customize your store
				to your taste, manage your sales, and keep records of your products in
				real-time.
			</p>
			<p className="text-xs mt-2">
				Here are some features coming very soon to TenBits
			</p>
			<section className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,1fr))] gap-8 my-12">
				<div className="bg-slate-50 p-4 rounded-md relative">
					{/* <Image
						src={fastIcon}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
					/> */}
					<small className="inline-block text-xs capitalize absolute right-0 top-0 px-1 text-accent bg-secondary shadow text-semibold">
						coming soon
					</small>
					<div className="text-primary border border-primary p-2 rounded flex w-fit">
						<TbTruckDelivery className="text-2xl " />
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Delivery API
					</h5>
					<p className="mt-2 text-sm">
						We are partnering with logistics companies to handle your delivery
						for you, so you can focus on providing better products to your
						customers.
					</p>
				</div>
				<div className="bg-slate-50 p-4 rounded-md relative">
					<small className="inline-block text-xs capitalize absolute right-0 top-0 px-1 text-accent bg-secondary shadow text-semibold">
						coming soon
					</small>
					<div className="border border-primary p-2 rounded-sm flex w-fit">
						<div className="text-primary flex w-fit">
							<DiGoogleAnalytics className="text-2xl " />
						</div>
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						The best of analytics tools
					</h5>
					<p className="mt-2 text-sm">
						Get real-time data about how customers are interacting with your
						products online. All the tools and insights you need to optimize
						your online business.
					</p>
				</div>
				<div className="bg-slate-50 p-4 rounded-md relative">
					<small className="inline-block text-xs capitalize absolute right-0 top-0 px-1 text-accent bg-secondary shadow text-semibold">
						coming soon
					</small>
					<div className="text-primary border border-primary p-2 rounded flex w-fit">
						<GiReceiveMoney className="text-2xl " />
					</div>
					<h5 className="mt-2 text-primary capitalize font-bold">
						Seamless payment gateway
					</h5>
					<p className="mt-2 text-sm">
						Soon you will be able to receive payments from different countries
						and in different currencies all within your
						<span className="text-primary font-semibold"> TenBits e-Store</span>
						.
					</p>
				</div>
			</section>
			<div className="w-full flex justify-center">
				<PrimaryBtn link="auth/register" text="get started today" />
			</div>
		</article>
	)
}

// this might be useful sometime in the future
{
	/* 
<div className="bg-slate-50 p-4 rounded-md">
<div className="text-primary border border-primary p-2 rounded-full flex w-fit">
    <FaHandshake className="text-2xl " />
</div>
<h5 className="mt-2 text-primary capitalize font-bold">
    Your virtual employee
</h5>
<p className="mt-2 text-sm">
    Not enough time to manage your business both online and offline?
    Soon you'll be able to add an alternate account to manage your
    e-Store.
</p>
</div> 
*/
}
