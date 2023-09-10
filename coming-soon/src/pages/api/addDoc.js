'use client'
// import { getAuth } from 'firebase/auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { db } from '@/firebase/firebase.config'

export default function useAddDoc(firestoreCollection) {
	const [isCancelled, setIsCancelled] = useState(false)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(null)

	async function addDocument(newDoc) {
		setIsPending(true)
		setError(null)

		try {
			// create doc
			const doc = {
				...newDoc,
				createdAt: serverTimestamp(),
			}

			// add doc
			const docRef = await addDoc(collection(db, firestoreCollection), {
				...doc,
			})

			if (!docRef) {
				throw new Error('Something went wrong...')
			}
			//  else {

			// }

			//   update state
			if (!isCancelled) {
				setIsPending(false)
				setError(null)
			}
		} catch (err) {
			if (!isCancelled) {
				console.log(err.message)
				setError(err.message)
				setIsPending(false)
			}
		}
	}

	useEffect(() => {
		return () => setIsCancelled(true)
	}, [])

	return { addDocument, isPending, error }
}
