export default function Header({ extraStyles, left }) {
	return (
		<header
			className={`w-full h-12 p-8 flex items-center justify-center ${extraStyles}`}
		>
			<h1
				className={`font-bold text-2xl lg:text-3xl ${left ? 'lg:mr-auto' : ''}`}
			>
				TenBits e-Store
			</h1>
		</header>
	)
}
