'use client'
import PrimaryBtn from '@/components/PrimaryBtn'
import Link from 'next/link'
import { useState } from 'react'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import Layout from './layout'

export default function Logo() {
	const [imageSrc, setImageSrc] = useState(null)

	return (
		<Layout completed={'w-[30%]'}>
			<article className="flex flex-col items-center justify-center gap-4 bg-white mx-auto w-full max-w-[30rem] p-8  shadow-md md:rounded-lg">
				<h1 className="text-2xl font-bold capitalize text-primary-dark mb-2">
					logo
				</h1>
				<p>
					A logo is an image that represents your company. It should be sharp
					and simple enough to make it memorable,{' '}
					<i>just like the Apple logo.</i>
				</p>
				<p className="w-full flex flex-col">
					Don't have a logo?
					<Link
						href={'mailto:info.tenbits@gmail.com?subject="logo design"'}
						className="text-primary font-semibold"
					>
						Contact out team to get a professional logo design.
					</Link>
					<a
						href="https://logo.com"
						target="_blank"
						rel="noreferrer noopener"
						className="text-secondary flex items-center gap-1"
					>
						Click here to generate a logo for free <HiArrowTopRightOnSquare />
					</a>
				</p>
				<form className="w-full flex flex-col gap-4 mt-3">
					<label className="flex flex-col space-y-2 w-full">
						<span class="sr-only">Choose a business logo</span>
						<input
							type="file"
							accept="image/*"
							placeholder="logo..."
							required
							name="tagline"
							// onChange={handleChange}
							// value={formData.email}
							className="w-full rounded-md bg-accent  file:mr-4 file:py-3 file:px-5
                            file:rounded-sm file:border-0
                            file:text-sm file:font-semibold
                            file:bg-primary file:text-accent
                            hover:file:bg-primary-dark"
						/>
					</label>
					<PrimaryBtn
						styles="w-full mt-8 py-4 font-semibold text-lg"
						link={'store-category'}
						text={'next'}
					/>
				</form>
			</article>
		</Layout>
	)
}
