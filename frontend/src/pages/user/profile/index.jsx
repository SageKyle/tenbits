import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const user = { firstName: 'John', lastName: 'Doe', email: 'example@email.com' }

export default function Profile() {
	return (
		<>
			<Navbar />
			<section className="min-h-[70vh]">
				<h2>Hey {user.firstName}</h2>
				<Link href={'store'} className="text-primary-dark">
					Create your e-Store
				</Link>
			</section>
			<Footer />
		</>
	)
}
