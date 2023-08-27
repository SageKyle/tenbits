'use client'

import InfoIcon from '@/assets/icons/info.svg'
import Navbar from '@/components/Navbar'
import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'

export default function Register() {
	const [formData, setFormData] = useState({
		userName: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	})
	const [showPassword, setShowPassword] = useState(false)

	function handleChange(e) {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	return (
		<>
			<Navbar />
			<section className="min-h-screen py-10 bg-slate-50">
				<article className="flex flex-col items-center justify-center gap-4 bg-white mx-auto w-fit min-w-[30rem] p-8  shadow-md rounded-lg">
					<h1 className="text-2xl font-bold capitalize text-primary-dark mb-2">
						sign up
					</h1>
					<p>Create your account</p>
					<form className="w-full flex flex-col gap-4">
						<label className="flex flex-col space-y-2 w-full">
							<span className="capitalize text-slate-500 text-lg">
								First name
							</span>
							<input
								type="text"
								placeholder="Enter your first name"
								required
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex flex-col space-y-2 w-full">
							<span className="capitalize text-slate-500 text-lg">
								last name
							</span>
							<input
								type="text"
								placeholder="Enter your last name"
								required
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex flex-col space-y-2 w-full">
							<span className="capitalize text-slate-500 text-lg">
								email address
							</span>
							<input
								type="email"
								placeholder="Enter your email address"
								required
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex flex-col space-y-2 w-full relative">
							<div className="flex items-baseline capitalize text-slate-500 text-lg">
								username{' '}
							</div>
							<input
								type="text"
								placeholder="Enter your username"
								required
								name="userName"
								value={formData.userName}
								onChange={handleChange}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
							<small className="inline-block text-xs lowercase bg-white">
								<Image
									src={InfoIcon}
									width={14}
									height={14}
									className="inline-block mr-1"
								/>
								A username must be unique for each user and must contain at
								least 4 characters
							</small>
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
							styles="w-full mt-8 mb-6 py-4 font-semibold text-lg"
							link={'register/verify-email'}
							text={'Next'}
						/>
						{/* </div> */}
						<small className="flex items-center justify-between mt-8 text-secondary text-base">
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
							<Link href="login" className="hover:underline">
								Already have an account?
							</Link>
							<span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
						</small>
					</form>
				</article>
			</section>
		</>
	)
}
