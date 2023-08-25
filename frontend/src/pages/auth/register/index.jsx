import PrimaryBtn from '@/components/PrimaryBtn'

export default function Register() {
	return (
		<section className="w-screen h-screen flex flex-col items-center justify-center gap-4">
			<h1>This is the register page</h1>
			<PrimaryBtn link={'register/verify-email'} text={'Next'} />
		</section>
	)
}
