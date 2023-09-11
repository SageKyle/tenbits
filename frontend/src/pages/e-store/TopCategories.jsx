import Link from 'next/link'
// import Image from "next/image"
import { FaShoePrints } from 'react-icons/fa'
import { GiClothes, GiNecklaceDisplay } from 'react-icons/gi'
import { IoBag } from 'react-icons/io5'

export default function TopCategories() {
	return (
		<article className="w-4/5 mx-auto my-6">
			<h3 className="text-primary mb-2 capitalize text-2xl font-bold">
				top categories
			</h3>
			<p className="mb-4">
				here are some of our top-trending product categories
			</p>
			<section className="my-4 grid grid-cols-[repeat(auto-fill,_minmax(10rem,1fr))] gap-8">
				<Link
					href={'e-store/products?category=clothes'}
					className="flex flex-col gap-3 items-center shadow p-4 rounded-md"
				>
					<GiClothes className="text-3xl" />
					<span>clothes</span>
				</Link>
				<Link
					href={'e-store/products?category=clothes'}
					className="flex flex-col gap-3 items-center shadow p-4 rounded-md"
				>
					<FaShoePrints className="text-3xl" />
					<span>shoes</span>
				</Link>
				<Link
					href={'e-store/products?category=clothes'}
					className="flex flex-col gap-3 items-center shadow p-4 rounded-md"
				>
					<IoBag className="text-3xl" />
					<span>bags</span>
				</Link>
				<Link
					href={'e-store/products?category=jewelries'}
					className="flex flex-col gap-3 items-center shadow p-4 rounded-md"
				>
					<GiNecklaceDisplay className="text-3xl" />
					<span>Jewelries</span>
				</Link>
				{/* <Link
					href={'e-store/products?category=clothes'}
					className="flex flex-col gap-3 items-center shadow p-4 rounded-md"
				>
					<FaShoppingBag className="text-3xl" />
					<span>clothes</span>
				</Link> */}
			</section>
		</article>
	)
}
