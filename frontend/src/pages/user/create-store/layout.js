import Link from 'next/link'

export default function Layout({ children, completed }) {
	function previousPage() {
		window.history.back()
	}

	return (
		<section className="w-full min-h-screen flex flex-col items-center justify-center">
			<section className="w-4/5 mx-auto my-6">
				<div className="w-full h-4 flex rounded-full bg-accent mb-4">
					<span
						className={`${completed} inline-block rounded-full h-full bg-primary`}
					></span>
				</div>
				<div
					className="flex text-primary font-semibold cursor-pointer self-start"
					onClick={previousPage}
				>
					<span className="[rotate:-90deg] font-cursive text-lg">^</span>
					<span>Back</span>
				</div>
			</section>
			<>{children}</>

			<div className="mt-6 mx-auto w-fit p-4">
				<span>Having difficulty setting up your e-Store? </span>
				<Link href={'store/feedback'} className="text-secondary">
					Contact our team
				</Link>
			</div>
		</section>
	)
}
