'use client'
import Link from 'next/link'
import Layout from './layout'

const user = { firstName: 'John', lastName: 'Doe', email: 'example@email.com' }

export default function Store() {
	return (
		<Layout>
			<section>
				<article className="flex flex-col gap-5 w-full p-8">
					<h2>Hey {user.firstName}</h2>
					<p>Let's guide you through setting up your e-Store</p>
					<Link
						href={'/'}
						className="py-2 px-6 rounded-md flex items-center justify-center capitalize w-fit-content bg-primary hover:bg-primary-dark text-white"
					>
						Next
					</Link>
				</article>
			</section>
		</Layout>
	)
}
