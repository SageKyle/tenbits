import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from './PrimaryBtn'

export default function Navbar({ logo }) {
	return (
		<nav className="w-full flex items-center justify-between py-4 px-10 bg-white">
			<ul className="flex space-x-4">
				<li>
					<Link href={'/blog'}>products</Link>
				</li>
				<li>
					<Link href={'/services'}>catalogue</Link>
				</li>
				<li>
					<Link href={'/contact'}>Contact</Link>
				</li>
			</ul>
			<Link href={'/'} className="relative inline-block w-14 h-14">
				<Image
					src={logo}
					fill
					objectFit="fit"
					objectPosition="center"
					priority
					// className="object-fit-fill"
					alt="TenBits Agency"
				/>
			</Link>
			<ul className="flex items-center gap-4">
				<li className="text-primary font-semibold hover:underline transition-all duration-200 ease-in-out">
					<Link href={'/auth/login'}>Login</Link>
				</li>
				<PrimaryBtn link={'/auth/register'} text="Register" />
			</ul>
		</nav>
	)
}
