'use client'
import PrimaryBtn from '@/components/PrimaryBtn'
import { useState } from 'react'

export default function CTA() {
	const [formData, setFormData] = useState({ email: '', message: '' })

	function handleChange(e) {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}
	return (
		<article className="w-full p-8 min-h-[20rem] bg-primary bg-purple-lines bg-no-repeat bg-contain bg-right bg-blend-screen opacity-90">
			<h3 className="text-secondary font-semibold">
				Need a customized website?
			</h3>
			<p className="text-accent text-sm mb-6">
				Get in touch with our team today.
			</p>
			<form className="w-full flex flex-col gap-4">
				<label className="flex flex-col space-y-2 w-full">
					{/* <span className="capitalize text-slate-500 text-lg">
						email address
					</span> */}
					<input
						type="email"
						placeholder="Enter your email address"
						required
						name="email"
						onChange={handleChange}
						value={formData.email}
						className="p-2 w-full rounded bg-transparent border border-accent placeholder:text-lg"
					/>
				</label>

				<label className="flex flex-col space-y-2 h-32 w-full">
					<textarea
						placeholder="Type a message here..."
						required
						name="message"
						onChange={handleChange}
						value={formData.message}
						className="p-2 w-full resize-none h-full bg-transparent border border-accent rounded placeholder:text-lg"
					/>
				</label>
				<PrimaryBtn styles="bg-secondary mt-4" link={'/'} text={'submit'} />
			</form>
		</article>
	)
}
