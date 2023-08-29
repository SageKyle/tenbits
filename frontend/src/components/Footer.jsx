import Logo from '@/assets/images/tenbit-no-bg.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="w-full px-10 pt-12 pb-2 bg-accent relative">
			<div className="flex absolute top-4 right-10 text-primary text-3xl font-semibold font-mono cursor-pointer animate transition-all animate-pulse">
				^
			</div>
			<section className="container flex justify-between gap-6 lg:w-[calc(100%-4rem)]">
				<Link href={'/'}>
					<Image
						src={Logo}
						height={40}
						width={40}
						alt="TenBits logo"
						loading="lazy"
					/>
				</Link>
				<ul className="flex items-center text-semibold gap-2  mb-4 lg:mr-16">
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/blog'}>Blog</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/services'}>Services</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/contact'}>Contact</Link>
					</li>
				</ul>
			</section>
			<p className="w-full text-center text-sm my-2">
				&copy; Copyright {new Date().getFullYear()} TenBits Agency
			</p>
		</footer>
	)
}
