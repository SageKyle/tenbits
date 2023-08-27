import Navbar from './Navbar'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	return (
		<section className="w-full">
			<Navbar />
			<article className="min-h-[25rem] pb-6 flex justify-center items-end bg-hero-bg bg-no-repeat bg-cover bg-center bg-gray-900 bg-blend-screen opacity-90 relative">
				<div className="flex items-center flex-col gap-2 h-full w-3/4 px-6 py-2 bg-primary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-500">
					<h3 className="text-primary-dark text-xs font-bold self-start">
						Introducing TenBits e-Store
					</h3>
					<p className="mb-4 text-accent">
						Unlock Your Business Potential with Our Effortless E-commerce
						Platform. Build Your Own Stunning Online Store in Minutes!
					</p>
					<PrimaryBtn link={'/auth/register'} text={'get started'} />
				</div>
			</article>
		</section>
	)
}
