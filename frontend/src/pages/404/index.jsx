import TenBitLogo from '@/assets/images/tenbit-no-bg.png'
import PrimaryBtn from '@/components/PrimaryBtn'
import Image from 'next/image'

export default function Fallback() {
	return (
		<section className="w-screen h-screen flex flex-col items-center justify-center gap-4">
			<Image src={TenBitLogo} width={200} height={200} loading="lazy" />
			<h1 className="text-3xl font-bold text-[#04084A]">Oops..</h1>
			<p>Seems you got the wrong link</p>
			<PrimaryBtn link={'/'} text={'Back home'} />
		</section>
	)
}
