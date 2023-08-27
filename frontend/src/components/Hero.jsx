import Navbar from './Navbar'
import PrimaryBtn from './PrimaryBtn'

export default function Hero() {
	return (
		<section className="w-full">
			<Navbar />
			<article className="min-h-[25rem] pb-6 flex justify-center items-end bg-hero-bg bg-no-repeat bg-cover bg-center bg-gray-900 bg-blend-screen opacity-90 relative">
				<div className="text-white flex items-center justify-end flex-col gap-2 h-full w-3/4 p-6 bg-primary rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-500">
					<p className="mb-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatibus qui explicabo sunt autem. Corporis sint quia autem
						veniam deleniti vel ad explicabo culpa quisquam consectetur.
						Voluptates eveniet odio dolorum ab?
					</p>
					<PrimaryBtn link={'/auth/register'} text={'get started'} />
				</div>
			</article>
		</section>
	)
}
