'use client'

import LaunchImage from '@/assets/images/coming-soon.png'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

// import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SuccessModal from '@/components/SuccessModal'
import CountriesSelect from '@/components/countriesSelect'
import useAddDoc from './api/addDoc'

const feedbackPlaceholder =
	'We have gotten a lot of feedback from several business owners on the kind of features they crave for. But we also want to hear from you.\nWhat features would you love us to add to your e-Store?\nHow can we make the platform more benefitial to you?'

export default function Register() {
	const [showModal, setShowModal] = useState(false)
	const [formData, setFormData] = useState({
		business: '',
		firstName: '',
		feedback: '',
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
		setShowModal(true)

		await addDocument(formData)

		console.log(formData)
	}

	return (
		<>
			<Head>
				<title>TenBits | e-Store Waitlist</title>
			</Head>
			<main
				className={`flex flex-col bg-slate-50 text-black w-full min-h-screen font-sans relative`}
			>
				<Header left={true} extraStyles={'lg:fixed'} />
				<section className="w-full relative">
					<article className="hidden lg:flex flex-col items-start justify-center gap-4 mt-4 w-1/2 max-h-screen lg:fixed lg:top-24 bottom-0 left-0">
						<h2 className="text-2xl font-bold text-[#222566] mb-2 lg:text-3xl self-center">
							Join our waitlist!
						</h2>
						<div className="relative w-full h-4/5">
							<Image
								src={LaunchImage}
								// height={350}
								// width={150}
								fill
								loading="lazy"
								alt="launching soon"
								className="object-contain w-full h-auto"
							/>
						</div>
					</article>
					<form
						onSubmit={onSubmit}
						className="bg-inherit flex flex-col max-w-xl mx-auto p-12 lg:mr-0 lg:ml-auto"
					>
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
							<select
								className="w-full rounded-sm border-2 bg-transparent p-2"
								id="country"
								name="country"
								required
								onChange={handleChange}
							>
								<CountriesSelect />
							</select>
						</label>
						<label className="flex flex-col gap-2 capitalize mb-5">
							<div>
								Feedback <span className="text-slate-400">optional</span>
							</div>
							<textarea
								placeholder={feedbackPlaceholder}
								name="feedback"
								value={formData.feedback}
								onChange={handleChange}
								className="w-full h-36 rounded-sm border-2 bg-transparent p-2 resize-none"
							/>
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
				{showModal && <SuccessModal firstName={formData.firstName} />}
				{/* <Footer /> */}
			</main>
		</>
	)
}
