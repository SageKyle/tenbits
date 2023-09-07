import Link from 'next/link'

export default function Layout({ children }) {
	return (
		<>
			<>{children}</>

			<div className="mt-6 mx-auto w-fit">
				<span>Having difficulty setting up your e-Store? </span>
				<Link href={'store/feedback'} className="text-secondary">
					Contact our team
				</Link>
			</div>
		</>
	)
}
