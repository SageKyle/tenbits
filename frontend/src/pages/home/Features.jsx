import shopIcon from '@/assets/icons/shop.svg'
import CirclePattern from '@/assets/images/demo_circle.svg'
import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'

export default function Features() {
	return (
		<article className="p-20 relative after:bg-feature-pattern bg-primary-dark bg-blend-darken after:bg-cover after:w-full after:block after:absolute after:z-10 after:inset-0">
			<h2 className="text-white text-2xl font-bold ">
				What makes TenBits stand out
			</h2>
			<p className="text-white">
				Here are some of the awesome features{' '}
				<span className="text-accent font-bold">TenBits</span> delivers
			</p>
			<section className="flex items-center justify-start gap-4 flex-wrap my-12">
				<div className="w-[28%] bg-slate-200 p-4 rounded-lg">
					<Image
						src={CirclePattern}
						height={30}
						width={30}
						objectFit="fill"
						loading="lazy"
						className="bg-primary p-4"
					/>
					<p className="mt-4">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
						doloribus. Impedit error optio maiores quae, suscipit consectetur,
						nam sunt non, recusandae cum exercitationem minima illo.
					</p>
				</div>
				<div className="w-[28%] bg-slate-200 p-4 rounded-lg">
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
				<div className="w-[28%] bg-slate-200 p-4 rounded-lg">
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
				<div className="w-[28%] bg-slate-200 p-4 rounded-lg">
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
