'use client'
import PrimaryBtn from '@/components/PrimaryBtn'
import { useState } from 'react'
import Layout from './layout'

import {
	FaFacebook,
	FaGlobe,
	FaInstagram,
	FaLinkedin,
	FaMapMarked,
	FaMastodon,
	FaPlus,
	FaTiktok,
	FaTwitch,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'

const initialState = {
	facebook: false,
	instagram: false,
	twitter: false,
	youtube: false,
	whatsapp: false,
	twitch: false,
	phone: false,
	mastodon: false,
	linkedin: false,
	address: true,
	web: false,
	tiktok: false,
}

export default function Socials() {
	const [showLinks, toggleShowLinks] = useState(false)
	const [showLinkInput, toggleDisplay] = useState({ ...initialState })

	function hideLinksPopup() {
		toggleShowLinks(false)
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
						<label
							className={`${
								showLinkInput.facebook ? 'flex' : 'hidden'
							} items-center gap-2 w-full`}
						>
							<FaFacebook className="text-2xl" />
							<input
								type="text"
								placeholder="link to your facebook page"
								required
								name="facebook"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label
							className={`${
								showLinkInput.twitter ? 'flex' : 'hidden'
							} items-center gap-2 w-full`}
						>
							<FaTwitter className="text-2xl" />
							<input
								type="text"
								placeholder="Twitter"
								required
								name="twitter"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label
							className={`${
								showLinkInput.instagram ? 'flex' : 'hidden'
							} items-center gap-2 w-full`}
						>
							<FaInstagram className="text-2xl" />
							<input
								type="text"
								placeholder="Instagram"
								required
								name="instagram"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaTiktok className="text-2xl" />
							<input
								type="text"
								placeholder="Tiktok"
								required
								name="tiktok"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaWhatsapp className="text-2xl" />
							<input
								type="text"
								placeholder="Whatsapp"
								required
								name="whatsapp"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaYoutube className="text-2xl" />
							<input
								type="text"
								placeholder="youtube"
								required
								name="youtube"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaTwitch className="text-2xl" />
							<input
								type="text"
								placeholder="twitch"
								required
								name="twitch"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaMastodon className="text-2xl" />
							<input
								type="text"
								placeholder="mastodon"
								required
								name="mastodon"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaGlobe className="text-2xl" />
							<input
								type="text"
								placeholder="website"
								required
								name="website"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<IoCall className="text-2xl" />
							<input
								type="number"
								placeholder="Phone number"
								required
								name="phoneNumber"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaLinkedin className="text-2xl" />
							<input
								type="text"
								placeholder="LinkedIn"
								required
								name="linkedin"
								// onChange={handleChange}
								// value={formData.email}
								className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
							/>
						</label>
						<label className="flex items-center gap-2 w-full">
							<FaMapMarked className="text-2xl" />
							<textarea
								placeholder="Your business address"
								required
								name="linkedin"
								maxLength={80}
								// onChange={handleChange}
								// value={formData.email}
								className="p-2 w-full h-32 resize-none rounded-md bg-accent placeholder:text-lg"
							/>
						</label>
						{/* all links popup */}
						<section
							className={`${
								showLinks ? 'flex' : 'hidden'
							} absolute left-0 bottom-0 bg-white capitalize flex-col gap-3 w-fit p-4 rounded-md  shadow-md`}
						>
							<div className="flex gap-2 items-center cursor-pointer hover:underline">
								<FaFacebook className="text-xl" />
								<span>facebook</span>
							</div>
							<div className="flex gap-2 items-center cursor-pointer hover:underline">
								<FaInstagram className="text-xl" />
								<span>instagram</span>
							</div>
							<div className="flex gap-2 items-center cursor-pointer hover:underline">
								<FaLinkedin className="text-xl" />
								<span>LinkedIn</span>
							</div>
						</section>
						{/* toggle show links */}
						<button
							className="py-2 px-4 bg-white shadow rounded-md capitalize font-semibold mt-4 flex items-center gap-1 w-fit ml-auto"
							type="button"
							onClick={() => toggleShowLinks((prev) => !prev)}
						>
							<FaPlus className="font-thin text-sm" /> add link
						</button>
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
