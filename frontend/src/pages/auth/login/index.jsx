'use client'

import Navbar from '@/components/Navbar'
import PrimaryBtn from '@/components/PrimaryBtn'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'

export default function Login() {
	const [formData, setFormData] = useState({ email: '', password: '' })
	const [showPassword, setShowPassword] = useState(false)

	function handleChange(e) {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	return (
		<>
			<Navbar />
			<section className="min-h-screen py-10 bg-slate-50">
				<article className="flex flex-col items-center justify-center gap-4 bg-white mx-auto w-full max-w-[30rem] p-8  shadow-md md:rounded-lg">
					<h1 className="text-2xl font-bold capitalize text-primary-dark mb-2">
						Login
					</h1>
					<p>Login to your account</p>
					<form className="w-full flex flex-col gap-4">
						<label className="flex flex-col space-y-2 w-full">
							<span className="capitalize text-slate-500 text-lg">
								email address
							</span>
							<input
								type="email"
								placeholder="Enter your email address"
								required
								name="email"
								onChange={handleChange}
								value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>

						<label className="flex flex-col space-y-2 w-full relative">
							<span className="capitalize text-slate-500 text-lg">
								password
							</span>
							<input
								type={showPassword ? 'text' : 'password'}
								placeholder="Enter your username password"
								required
								name="password"
								value={formData.password}
								onChange={handleChange}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
							<div className="ml-auto mr-2 inline-block cursor-pointer absolute top-1/2 right-0 text-2xl">
								{showPassword && (
									<HiOutlineEye
										onClick={() => setShowPassword((prev) => !prev)}
									/>
								)}
								{!showPassword && (
									<HiOutlineEyeOff
										onClick={() => setShowPassword((prev) => !prev)}
									/>
								)}
							</div>
						</label>
						{/* <div className="w-full"> */}
						<PrimaryBtn
							styles="w-full mt-8 py-4 font-semibold text-lg"
							link={'/'}
							text={'login'}
						/>
						{/* </div> */}
						<small className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center justify-between mt-2 text-secondary text-base before:inline-block before:border-b before:border-gray-300 after:inline-block after:border-b after:border-gray-300">
							<Link href="register" className="inline-block hover:underline">
								Don't have an account?
							</Link>
						</small>
					</form>
				</article>
			</section>
		</>
	)
}
