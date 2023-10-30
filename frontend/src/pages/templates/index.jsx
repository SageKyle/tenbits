import Link from 'next/link'

export default function Templates() {
	return (
		<section role="main" aria-label="e-store templates page">
			<h1>Templates</h1>
			<p>Check out some of the available templates you can choose from.</p>
			<section
				className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,1fr))] gap-8 my-12"
				aria-label="templates container"
			>
				<Link href={'/'}></Link>
			</section>
		</section>
	)
}
