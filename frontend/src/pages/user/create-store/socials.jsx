'use client'
import PrimaryBtn from '@/components/PrimaryBtn'
import { useState } from 'react'
import { FaMapMarked } from 'react-icons/fa'
import CreateSocialInput from './components/CreateSocialInput'
import Layout from './layout'

const initialFormValueState = {
	address: '',
	phone: '',
	facebook: '',
	instagram: '',
	twitter: '',
	youtube: '',
	whatsApp: '',
	twitch: '',
	mastodon: '',
	linkedIn: '',
	web: '',
	tiktok: '',
	vimeo: '',
	snapchat: '',
}

export default function Socials() {
	const [formData, setFormData] = useState(initialFormValueState)

	function handleChange(e) {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	return (
		<Layout completed={'w-[90%]'}>
			<article className="flex flex-col items-center justify-center gap-4 bg-white mx-auto w-full max-w-[30rem] p-8  shadow-md md:rounded-lg">
				<h1 className="text-2xl font-bold capitalize text-primary-dark mb-2">
					social links
				</h1>
				<p>
					Your social media links provide a way for your customers to connect
					with you on different platforms
				</p>
				<form className="w-full ">
					<section className="relative w-full flex flex-col gap-4">
						<label className="flex items-center gap-2 w-full">
							<FaMapMarked className="text-2xl" />
							<textarea
								placeholder="Your business address"
								required
								name="address"
								title="business address"
								maxLength={80}
								onChange={handleChange}
								value={formData.address}
								className="p-2 w-full h-32 resize-none rounded-md bg-accent placeholder:text-lg"
							/>
						</label>
						{/* all links popup */}
						<CreateSocialInput
							handleChange={handleChange}
							formData={formData}
						/>
					</section>
					<PrimaryBtn
						styles="w-full mt-8 py-4 font-semibold text-lg"
						link={'completed'}
						text={'next'}
					/>
				</form>
			</article>
		</Layout>
	)
}
