import Link from 'next/link'

export default function PrimaryBtn({ text, link, styles }) {
	return (
		<Link href={link}>
			<button
				type="button"
				className={`${styles} py-2 px-6 rounded-md flex items-center justify-center capitalize w-fit-content bg-primary hover:bg-primary-dark text-white`}
			>
				{text}
			</button>
		</Link>
	)
}
