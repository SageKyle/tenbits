'use client'

import { useState } from 'react'

import {
	FaFacebook,
	FaGlobe,
	FaInstagram,
	FaLinkedin,
	FaMastodon,
	FaPlus,
	FaSnapchat,
	FaTiktok,
	FaTwitch,
	FaTwitter,
	FaVimeo,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'

const initialState = [
	{ Icon: FaFacebook, name: 'facebook' },
	{ Icon: FaInstagram, name: 'instagram' },
	{ Icon: FaTwitter, name: 'twitter' },
	{ Icon: FaYoutube, name: 'youtube' },
	{ Icon: FaWhatsapp, name: 'whatsApp' },
	{ Icon: FaTwitch, name: 'twitch' },
	{ Icon: IoCall, name: 'phone' },
	{ Icon: FaMastodon, name: 'mastodon' },
	{ Icon: FaLinkedin, name: 'linkedIn' },
	{ Icon: FaGlobe, name: 'web' },
	{ Icon: FaTiktok, name: 'tiktok' },
	{ Icon: FaVimeo, name: 'vimeo' },
	{ Icon: FaSnapchat, name: 'snapchat' },
]

export default function CreateSocialInput({ handleChange, formData }) {
	const [icons, addIcon] = useState([])
	const [popupIcons, removePopupIcon] = useState(initialState)
	const [showLinks, toggleShowLinks] = useState(false)

	function hideLinksPopup() {
		toggleShowLinks(false)
	}

	function addSocialInput(Icon, name) {
		// add icon to input form
		addIcon((prev) => [...prev, { Icon, name }])
		// remove icon from popup
		removePopupIcon((prevState) =>
			prevState.filter((socialItem) => socialItem.name !== name)
		)
		// hide popup
		hideLinksPopup()
	}

	return (
		<section className="relative w-full">
			<>
				{icons.map(({ Icon, name }) => (
					<label key={name} className="flex items-center gap-2 w-full mb-4">
						<Icon className="text-2xl" />
						<input
							type="text"
							placeholder={name}
							required
							name={name}
							title={name}
							onChange={handleChange}
							value={formData[name]}
							className="p-4 w-full rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
						/>
					</label>
				))}
			</>
			{/* icons popup */}
			<div
				className={`${
					showLinks ? 'flex' : 'hidden'
				} absolute left-0 bottom-0 bg-white capitalize flex-col gap-3 w-fit p-4 rounded-md  shadow-md`}
			>
				{popupIcons.map(({ Icon, name }) => (
					<div
						key={name}
						onClick={() => addSocialInput(Icon, name)}
						className="flex gap-2 items-center cursor-pointer hover:underline"
					>
						<Icon className="text-xl" />
						<span>{name}</span>
					</div>
				))}
			</div>
			{/* toggle show links */}
			<button
				className="py-2 px-4 bg-white shadow rounded-md capitalize font-semibold mt-4 flex items-center gap-1 w-fit ml-auto"
				type="button"
				onClick={() => toggleShowLinks((prev) => !prev)}
			>
				<FaPlus className="font-thin text-sm" /> add link
			</button>
		</section>
	)
}
