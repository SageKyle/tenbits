import HeroImage from '@/assets/images/Mobile_marketing.png'
import Image from 'next/image'
// import Link from 'next/link'
import Navbar from './Navbar'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	return (
		<section className="w-full h-screen ">
			<Navbar />
			<article className="flex gap-4 flex-wrap justify-between items-center p-8 bg-accent">
				<Image src={HeroImage} className="w-1/2 h-auto" />
				<div className="flex flex-col gap-2 w-[45%]">
					<p className="mb-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatibus qui explicabo sunt autem. Corporis sint quia autem
						veniam deleniti vel ad explicabo culpa quisquam consectetur.
						Voluptates eveniet odio dolorum ab?
					</p>
					<PrimaryBtn link={'/auth/register'} text={'register'} />
				</div>
			</article>
		</section>
	)
}
