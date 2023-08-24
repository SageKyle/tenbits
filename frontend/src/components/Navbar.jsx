import Logo from '@/assets/images/tenbit-no-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryBtn from './PrimaryBtn'

export default function Navbar() {
	return (
		<nav className="w-full flex items-center justify-between py-4 px-10">
			<Link href={'/'} className="relative inline-block w-14 h-14">
				<Image
					src={Logo}
					fill
					objectFit="fit"
					objectPosition="center"
					priority
					// className="object-fit-fill"
					alt="TenBits Agency"
				/>
			</Link>
			<ul className="flex space-x-4">
				<li>
					<Link href={'/blog'}>Blog</Link>
				</li>
				<li>
					<Link href={'/services'}>Services</Link>
				</li>
				<li>
					<Link href={'/contact'}>Contact</Link>
				</li>
			</ul>
			<ul className="flex items-center gap-4">
				<li>
					<Link href={'/auth/login'}>Login</Link>
				</li>
				<PrimaryBtn link={'/auth/register'} text="Register" />
			</ul>
		</nav>
	)
}
