import shopIcon from '@/assets/icons/shop.svg'
import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'

export default function Benefits() {
	return (
		<article className="p-20">
			<h2 className="text-primary text-2xl font-bold font-cursive">
				What TenBits offers
			</h2>
			<p>
				Here are some of the amazing benefits you stand to gain by using{' '}
				<span className="text-primary font-bold">TenBits</span>
			</p>
			<section className="flex items-center justify-start gap-4 flex-wrap my-12">
				<div className="w-[28%] bg-accent p-4 rounded-lg">
					<Image
						src={shopIcon}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
					/>
					<p className="mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
						doloribus. Impedit error optio maiores quae, suscipit consectetur,
						nam sunt non, recusandae cum exercitationem minima illo.
					</p>
				</div>
				<div className="w-[28%] bg-accent p-4 rounded-lg">
					<Image
						src={shopIcon}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
					/>
					<p className="mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
						doloribus. Impedit error optio maiores quae, suscipit consectetur,
						nam sunt non, recusandae cum exercitationem minima illo.
					</p>
				</div>
				<div className="w-[28%] bg-accent p-4 rounded-lg">
					<Image
						src={shopIcon}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
					/>
					<p className="mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
						doloribus. Impedit error optio maiores quae, suscipit consectetur,
						nam sunt non, recusandae cum exercitationem minima illo.
					</p>
				</div>
				<div className="w-[28%] bg-accent p-4 rounded-lg">
					<Image
						src={shopIcon}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
					/>
					<p className="mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
						doloribus. Impedit error optio maiores quae, suscipit consectetur,
						nam sunt non, recusandae cum exercitationem minima illo.
					</p>
				</div>
			</section>
			<div className="w-full flex justify-center">
				<PrimaryBtn link="auth/register" text="register now" />
			</div>
		</article>
	)
}
