import ProductImg from '@/assets/images/e-commerce-technology-img.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

export default function LatestProducts() {
	return (
		<section className="w-4/5 mx-auto relative my-20">
			<h3 className="text-primary mb-6 capitalize text-lg md:text-2xl font-bold">
				latest products
			</h3>
			<Link
				href={'e-store/products'}
				className="flex items-center gap-1 absolute right-0 top-1 capitalize text-xs sm:text-sm font-semibold hover:text-orange underline hover:gap-2 transition-all ease-in-out duration-200"
			>
				view all products <HiArrowLongRight />
			</Link>
			<article className="my-8 grid grid-cols-[repeat(auto-fill,_minmax(20rem,1fr))] gap-8">
				<Link
					href={'products/:id'}
					className="w-full shadow-sm rounded-md flex flex-col gap-4 pb-4 bg-slate-50"
				>
					<div className="relative h-[20rem] w-full object-cover object-center">
						<Image src={ProductImg} fill alt="product image" loading="lazy" />
					</div>
					<h4 className="font-semibold capitalize text-lg px-3">
						product name 1
					</h4>
					<h5 className="font-bold px-3">$29</h5>
				</Link>

				<Link
					href={'products/:id'}
					className="w-full shadow-sm rounded-md flex flex-col gap-4 pb-4 bg-slate-50"
				>
					<div className="relative h-[20rem] w-full object-cover object-center">
						<Image src={ProductImg} fill alt="product image" loading="lazy" />
					</div>
					<h4 className="font-semibold capitalize text-lg px-3">
						product name 1
					</h4>
					<h5 className="font-bold px-3">$29</h5>
				</Link>

				<Link
					href={'products/:id'}
					className="w-full shadow-sm rounded-md flex flex-col gap-4 pb-4 bg-slate-50"
				>
					<div className="relative h-[20rem] w-full object-cover object-center">
						<Image src={ProductImg} fill alt="product image" loading="lazy" />
					</div>
					<h4 className="font-semibold capitalize text-lg px-3">
						product name 1
					</h4>
					<h5 className="font-bold px-3">$29</h5>
				</Link>
			</article>
		</section>
	)
}
