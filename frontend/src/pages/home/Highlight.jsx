import SampleImage from '@/assets/images/e-commerce-technology.gif'
import Image from 'next/image'

export default function Highlight() {
	return (
		<article className="w-full my-14">
			<h3 className="text-primary text-xs font-bold ml-6 mb-2 capitalize">
				the power of e-commerce
			</h3>
			<small className="mb-6 block mx-6 ">
				Imagine what it would be like to showcase your business to{' '}
				<span className="text-secondary">10, 000 people</span>. Now multiply
				that by 100; that is what you stand to gain for FREE, and more! by using{' '}
				<span className="text-primary font-bold">TenBits e-Store</span> today.
			</small>
			<div className="w-full max-h-[30rem] my-4">
				<Image src={SampleImage} loading="lazy" alt="e-commerce technology" />
			</div>
		</article>
	)
}
