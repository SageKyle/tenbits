'use client'
import PrimaryBtn from '@/components/PrimaryBtn'
// import Link from 'next/link'
import Layout from './layout'

// const user = { firstName: 'John', lastName: 'Doe', email: 'example@email.com' }

export default function StoreName() {
	return (
		<Layout completed={'w-[40%]'}>
			<article className="flex flex-col items-center justify-center gap-4 bg-white mx-auto w-full max-w-[30rem] p-8  shadow md:rounded-lg">
				<h1 className="text-2xl font-bold capitalize text-primary-dark mb-2">
					category
				</h1>
				<p>Select your business category</p>
				<form className="w-full flex flex-col gap-4">
					<label className="flex flex-col space-y-2 w-full">
						<select
							placeholder="Name of your e-Store..."
							required
							name="storeName"
							// onChange={handleChange}
							// value={formData.email}
							className="p-4 w-full capitalize rounded-md bg-accent placeholder:capitalize placeholder:text-lg"
						>
							<option value="">--Select category--</option>
							<option value="fashion&nbsp;store">fashion store</option>
							<option value="fashion&nbsp;store">fashion store</option>
							<option value="fashion&nbsp;store">fashion store</option>
							<option value="fashion&nbsp;store">fashion store</option>
						</select>
					</label>
					<PrimaryBtn
						styles="w-full mt-8 py-4 font-semibold text-lg"
						link={'socials'}
						text={'next'}
					/>
				</form>
			</article>
		</Layout>
	)
}
