'use client'

import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'

import { useState } from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'

export default function StoreNavbar({ logo, name }) {
	const [showNav, toggleShowNav] = useState(false)

	return (
		<nav className="w-full flex items-center justify-between py-4 px-10 bg-white h-16">
			<Link href={'/'} className="max-w-1/3 flex items-center h-full">
				<div className="h-full relative w-fit">
					<Image
						src={logo}
						// fill
						// height={}
						priority
						className="w-full h-full object-contain object-center"
						alt={name}
					/>
				</div>
				<h1 className="text-primary text-base lg:text-lg font-bold capitalize ml-3 inline-block">
					{name}
				</h1>
			</Link>
			<div
				className={`absolute text-center right-0 top-14 rounded-md w-3/5 flex flex-col items-center bg-white py-6 px-12 shadow-sm transition-all duration-500 ease-in-out ${
					showNav
						? 'translate-y-0 z-[2]'
						: 'translate-y-[-25rem] z-[-2] lg:translate-y-0 lg:z-[2]'
				} lg:static lg:flex-row lg:w-fit lg:gap-4 lg:px-4 lg:py-4 lg:justify-between lg:shadow-none`}
			>
				<ul className="flex flex-col items-center gap-2 lg:flex-row lg:mr-16 capitalize ">
					<li className="hover:underline">
						<Link href={'/e-store'}>home</Link>
					</li>
					<li className="hover:underline">
						<Link href={'/e-store/products'}>shop</Link>
					</li>
					<li className="hover:underline">
						<Link href={'/e-store/contact'}>contact us</Link>
					</li>
					<li className="hover:underline">
						<Link href={'/e-store/about'}>About Us</Link>
					</li>
				</ul>
			</div>
			<div
				onClick={() => toggleShowNav((prev) => !prev)}
				className="inline-block cursor-pointer text-3xl h-4 w-4 lg:hidden"
			>
				<HiOutlineBars3BottomLeft />
			</div>

			<form className="h-full w-1/5 gap-2 hidden lg:flex lg:items-center">
				<label htmlFor="search" className="cursor-pointer text-lg">
					<AiOutlineSearch role="button" />
				</label>
				<input
					type="text"
					name="search"
					id="search"
					placeholder="Search products..."
					className="h-full w-full border rounded p-1"
				/>
			</form>
		</nav>
	)
}
