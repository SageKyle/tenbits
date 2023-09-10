import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Footer() {
	return (
		<footer className="w-full flex flex-col gap-4 p-6 items-center justify-center">
			<section className="flex items-center justify-center gap-4 w-full p-4">
				<a
					href="https://twitter.com/@Ominyi_Saje"
					target="_blank"
					title="Twitter"
					className="text-2xl hover:text-[#222566] transition-colors ease-in-out duration-200"
				>
					<FaTwitter />
				</a>
				<a
					href="https://linkedin.com/in/ominyi"
					target="_blank"
					title="LinkedIn"
					className="text-2xl hover:text-[#222566] transition-colors ease-in-out duration-200"
				>
					<FaLinkedin />
				</a>
				<a
					href="mailto:e.tenbits@gmail.com"
					title="Send us an email"
					className="text-2xl hover:text-[#222566] transition-colors ease-in-out duration-200"
				>
					<SiGmail />
				</a>
			</section>
			<p className="font-semibold">&copy;TenBits 2023. All rights reserved</p>
		</footer>
	)
}
