import Logo from '@/assets/images/tenbit-no-bg.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="flex gap-6 p-12 bg-slate-100">
			<Link href={'/'}>
				<Image src={Logo} height={50} width={50} alt="TenBits logo" />
			</Link>
			<h4>This is the footer</h4>
		</footer>
	)
}
