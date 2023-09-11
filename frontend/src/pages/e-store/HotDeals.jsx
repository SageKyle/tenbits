import DealImage from '@/assets/images/Mobile_marketing.png'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowLongRight } from 'react-icons/hi2'

export default function HotDeals() {
	return (
		<article className="w-full bg-accent my-20 p8">
			<section className="w-full items-center justify-center grid md:grid-cols-[repeat(auto-fit,_minmax(27rem,1fr))] gap-6 p-8 md:p-14 mx-auto">
				<div className="w-full max-w-[35rem] flex flex-col gap-4 lg:p-4">
					<button
						type="button"
						className="w-fit bg-orange py-2 px-4 font-bold text-white uppercase inline-block mx-auto lg:mx-0"
					>
						hot deals!
					</button>
					<p className="my-2 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
						numquam dicta totam et voluptatem. Rerum dolorum voluptate debitis!
						Praesentium architecto quam odio debitis facilis omnis blanditiis,
						rerum fugiat quasi voluptates.
					</p>
					<Link
						href={'e-store/products'}
						className="flex items-center gap-1 w-fit capitalize font-semibold text-primary hover:text-primary-dark hover:underline hover:gap-2 transition-all ease-in-out duration-200"
					>
						buy now{' '}
						<HiArrowLongRight className="animate transition-all animate-pulse linear duration-150" />
					</Link>
				</div>
				<div className="relative w-full max-w-[35rem] h-[25rem] flex">
					<Image src={DealImage} fill loading="lazy" className="object-fill" />
				</div>
			</section>
		</article>
	)
}
