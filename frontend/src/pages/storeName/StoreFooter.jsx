import Image from 'next/image'
import Link from 'next/link'

export default function StoreFooter({ logo, name }) {
	return (
		<footer className="w-full px-10 pt-12 pb-2 bg-accent relative">
			<div className="flex absolute top-4 right-10 text-primary text-3xl font-semibold font-cursive cursor-pointer animate transition-all animate-pulse">
				^
			</div>
			<section className="container flex justify-between gap-6 lg:w-[calc(100%-4rem)]">
				<Link href={'/'} className="relative h-16 w-fit">
					<Image
						src={logo}
						// fill
						// height={}
						priority
						className="w-full h-full object-contain object-center"
						alt={name}
					/>
				</Link>
				<ul className="flex flex-wrap items-center justify-end text-semibold gap-2 capitalize mb-4 lg:mr-16">
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/e-store'}>home</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/e-store/products'}>shop</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/e-store/contact'}>Contact us</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/e-store/about'}>about us</Link>
					</li>
				</ul>
			</section>
			<Link href={'/'} className="flex mx-auto w-fit gap-1 font-medium my-2">
				Powered by <span className="font-bold text-primary-dark">TenBits</span>
			</Link>
			<p className="w-full text-center text-sm my-2">
				&copy; {new Date().getFullYear()} {name}. All rights reserved
			</p>
		</footer>
	)
}
