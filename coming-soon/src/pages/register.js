'use client'

import LaunchImage from '@/assets/images/coming-soon.png'
import Image from 'next/image'
import { useState } from 'react'

// import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CountriesSelect from '@/components/countriesSelect'
import useAddDoc from './api/addDoc'

export default function Register() {
	const [formData, setFormData] = useState({
		business: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		country: '',
	})
	const { addDocument, error, isPending } = useAddDoc('waitlist')

	function handleChange(e) {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	async function onSubmit(e) {
		e.preventDefault()
		await addDocument(formData)

		console.log(formData)
	}

	return (
		<main className={`flex flex-col bg-slate-50 w-full min-h-screen font-sans`}>
			<Header left={true} />
			<section className="w-full gap-4 lg:grid grid-cols-2">
				<article className="hidden lg:flex flex-col items-center justify-center gap-4 mt-4">
					<h2 className="text-2xl font-bold text-[#222566] mb-2 lg:text-3xl">
						Join our waitlist!
					</h2>
					<div className="relative w-full h-4/5">
						<Image
							src={LaunchImage}
							fill
							loading="lazy"
							alt="launching soon"
							className="object-contain"
						/>
					</div>
				</article>
				<form onSubmit={onSubmit} className="w-full max-w-xl mx-auto p-12">
					<h4 className="text-xl font-bold mb-4">
						Be the first to know when we launch
					</h4>
					<label className="flex flex-col gap-2 capitalize mb-3">
						<span>
							business name<sup className="text-red-600">*</sup>
						</span>
						<input
							placeholder="TenBits"
							required
							name="business"
							value={formData.business}
							onChange={handleChange}
							className="w-full rounded-sm border-2 bg-transparent p-2"
						/>
					</label>
					<label className="flex flex-col flex-wrap gap-2 capitalize mb-3">
						<span>
							Name<sup className="text-red-600">*</sup>
						</span>
						<div className="flex items-center gap-2 w-full">
							<input
								placeholder="First Name"
								required
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								className="w-1/2 rounded-sm border-2 bg-transparent p-2"
							/>
							<input
								placeholder="Last Name"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								className="w-1/2 rounded-sm border-2 bg-transparent p-2"
							/>
						</div>
					</label>

					<label className="flex flex-col gap-2 capitalize mb-3">
						<span>
							email address<sup className="text-red-600">*</sup>
						</span>
						<input
							placeholder="example@email.com"
							type="email"
							required
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full rounded-sm border-2 bg-transparent p-2"
						/>
					</label>
					<label className="flex flex-col gap-2 capitalize mb-3">
						<span>phone</span>
						<input
							placeholder="08039411022"
							type="tel"
							required
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="w-full rounded-sm border-2 bg-transparent p-2"
						/>
					</label>
					<label className="flex flex-col gap-2 capitalize mb-6">
						<span>
							country<sup className="text-red-600">*</sup>
						</span>
						<CountriesSelect onChange={handleChange} />
					</label>
					<button
						disabled={isPending}
						className={`w-full p-4 bg-black text-white font-bold text-xl capitalize ${
							isPending ? 'bg-gray-600' : ''
						}`}
					>
						{isPending ? 'loading...' : 'submit'}
					</button>
					{error && <p className="text-red-600 mt-6">{error}</p>}
				</form>
			</section>
			{/* <Footer /> */}
		</main>
	)
}
