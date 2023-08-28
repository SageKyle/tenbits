import Navbar from './Navbar'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	return (
		<section className="w-full">
			<Navbar />
			<article className="min-h-[25rem] pb-6 flex justify-center items-end bg-hero-bg bg-no-repeat bg-cover bg-center bg-black bg-blend-screen opacity-90 relative lg:min-h-[85vh] lg:bg-hero-bg-wide lg:justify-end ">
				<div className="flex items-center flex-col gap-2 h-full w-3/4 px-6 pt-2 pb-6 bg-primary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-500 lg:w-1/2 lg:mx-auto lg:h-fit">
					<h3 className="text-primary-dark text-sm font-bold self-start lg:text-orange">
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
