import PrimaryBtn from '@/components/PrimaryBtn'

export default function VerifyEmail() {
	return (
		<article className="w-screen h-screen flex flex-col items-center justify-center gap-4">
			<h2>Verify your email address</h2>
			<p>Click on the link sent to your mail to verify your email address</p>
			<PrimaryBtn link={'/'} text={'home'} />
		</article>
	)
}
