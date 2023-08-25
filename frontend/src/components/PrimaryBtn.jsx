import Link from 'next/link'

export default function PrimaryBtn({ text, link }) {
	return (
		<Link href={link}>
			<button className="py-2 px-6 rounded-md flex items-center capitalize w-fit-content bg-primary hover:bg-primary-dark text-white">
				{text}
			</button>
		</Link>
	)
}
