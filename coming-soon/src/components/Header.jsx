import Logo from '@/assets/icons/tenbits-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Header({ extraStyles, left }) {
	return (
		<header
			className={`w-full h-12 p-8 flex items-center justify-center ${extraStyles}`}
		>
			<Link
				href={'/'}
				className={` h-full w-fit text-2xl lg:text-3xl flex items-baseline gap-3 ${
					left ? 'lg:mr-auto' : ''
				}`}
			>
				<div className="relative h-10 w-32">
					<Image
						src={Logo}
						priority
						fill
						className="w-fit h-full object-contain object-center"
					/>
				</div>
				{/* <span>e-Store</span> */}
			</Link>
		</header>
	)
}
