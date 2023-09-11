import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

export default function CatchAllRoute() {
	return (
		<main className="flex flex-col gap-4 items-center justify-center bg-slate-50 w-full min-h-screen">
			<FaSearch className="text-[#222566] text-6xl" />
			<p>
				<strong className="font-bold text-lg">Oops...</strong> Seems you got the
				wrong link.
			</p>
			<Link
				href={'/'}
				className="px-4 py-2 border border-[#222566] bg-[#222566] text-white rounded-md transition-colors ease-in-out duration-200 hover:bg-[#04084A]"
			>
				Back To Home
			</Link>
		</main>
	)
}
