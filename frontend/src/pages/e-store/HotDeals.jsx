import DealImage from '@/assets/images/Mobile_marketing.png'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

export default function HotDeals() {
	return (
		<article className="w-full bg-accent my-20 p8">
			<section className="flex items-center justify-center grid grid-cols-[repeat(auto-fill,_minmax(30rem,1fr))] gap-6 p-16">
				<div className="flex flex-col gap-4">
					<button
						type="button"
						className="bg-orange py-2 px-4 font-bold text-white uppercase inline-block mx-auto"
					>
						hot deals!
					</button>
					<p className="my-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
						numquam dicta totam et voluptatem. Rerum dolorum voluptate debitis!
						Praesentium architecto quam odio debitis facilis omnis blanditiis,
						rerum fugiat quasi voluptates.
					</p>
					<Link
						href={'e-store/products'}
						className="flex items-center gap-1 capitalize font-semibold text-primary hover:text-primary-dark hover:underline hover:gap-2 transition-all ease-in-out duration-200"
					>
						buy now{' '}
						<HiArrowLongRight className="animate transition-all animate-pulse linear duration-150" />
					</Link>
				</div>
				<div className="relative w-inherit h-[25rem] flex">
					<Image src={DealImage} fill loading="lazy" className="object-fill" />
				</div>
			</section>
		</article>
	)
}
