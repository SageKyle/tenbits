import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Support() {
	return (
		<main
			className={`flex flex-col justify-between bg-slate-50 w-full min-h-screen ${inter.className}`}
		>
			<Header />
			<h2>Support our team</h2>
			<p>
				We are a very small team building a very large project. At the moment,
				we are looking for sponsors and investors.
			</p>
			<p>
				If you are interested, please reach out to us through our email:{' '}
				<a
					href="mailto:e.tenbits@gmail.com"
					className="font-bold text-[#222566] hover:underline"
				>
					e.tenbits@gmail.com
				</a>
			</p>
			<Footer />
		</main>
	)
}
