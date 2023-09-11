import ProductImg from '@/assets/images/e-commerce-technology-img.jpg'
import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedProducts() {
	return (
		<section className="w-4/5 mx-auto my-10">
			<h3 className="text-primary mb-6 capitalize text-center text-2xl font-bold">
				featured products
			</h3>
			<p className="mb-4 text-center">
				check out some of our top-selling products
			</p>
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
			<PrimaryBtn
				text={'view all'}
				link={'e-store/products'}
				styles={'mx-auto'}
			/>
		</section>
	)
}
