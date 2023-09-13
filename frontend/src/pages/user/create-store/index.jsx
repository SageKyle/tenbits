'use client'
import Link from 'next/link'
import Layout from './layout'

const user = { firstName: 'John', lastName: 'Doe', email: 'example@email.com' }

export default function Store() {
	return (
		<Layout completed={'w-[1%]'}>
			<section>
				<article className="flex flex-col items-center justify-center gap-4 bg-white mx-auto w-full max-w-lg p-8  shadow md:rounded-lg">
					<h2>Hey {user.firstName}</h2>
					<p>Let's guide you through setting up your e-Store</p>
					<Link
						href={'create-store/name'}
						className="py-2 px-6 rounded-md flex items-center justify-center capitalize w-fit-content bg-primary hover:bg-primary-dark text-white"
					>
						Next
					</Link>
				</article>
			</section>
		</Layout>
	)
}
