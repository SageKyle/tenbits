'use client'

import Logo from '@/assets/images/tenbit-no-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import PrimaryBtn from './PrimaryBtn'

export default function Navbar() {
	const [showNav, toggleShowNav] = useState(false)

	return (
		<nav className="w-full flex items-center justify-between py-2 px-10 bg-white relative">
			<Link href={'/'} className="flex">
				<Image
					src={Logo}
					height={34}
					objectPosition="center"
					priority
					alt="TenBits Agency"
				/>
			</Link>
			<div
				className={`absolute text-center right-0 top-14 rounded-md w-3/5 flex flex-col items-center bg-white py-6 px-12 shadow-sm transition-all duration-500 ease-in-out ${
					showNav
						? 'translate-y-0 z-[2]'
						: 'translate-y-[-25rem] z-[-2] lg:translate-y-0 lg:z-[2]'
				} lg:static lg:flex-row lg:gap-4 lg:px-4 lg:py-4 lg:justify-between lg:shadow-none`}
			>
				<ul className="flex flex-col items-center gap-2 lg:flex-row lg:mr-16">
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/blog'}>Blog</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/services'}>Services</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/templates'}>Templates</Link>
					</li>
					<li className="hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/contact'}>Contact</Link>
					</li>
				</ul>

				<ul className="flex mt-3 gap-4 flex-col lg:flex-row lg:mt-0 items-center">
					<li className="text-primary font-semibold hover:underline transition-all duration-200 ease-in-out">
						<Link href={'/auth/login'}>Login</Link>
					</li>
					<PrimaryBtn link={'/auth/register'} text="Register" />
				</ul>
			</div>
			<div
				onClick={() => toggleShowNav((prev) => !prev)}
				className="inline-block cursor-pointer text-3xl h-4 w-4 lg:hidden"
			>
				<HiOutlineBars3BottomLeft />
			</div>
		</nav>
	)
}
