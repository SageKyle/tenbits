import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = process?.env?.FIREBASE_CONFIG ?? '{}'
const firebaseConfig = {
	apiKey: 'AIzaSyAHZ0vIzWawDaAL2C04-WQcs4MKkkXOCGk',
	authDomain: 'tenbits-1.firebaseapp.com',
	projectId: 'tenbits-1',
	storageBucket: 'tenbits-1.appspot.com',
	messagingSenderId: '415286767465',
	appId: '1:415286767465:web:2d5b6d4689902facd8d7f8',
	measurementId: 'G-9KGVQ4CEKD',
}

let analytics
let db
if (firebaseConfig?.projectId) {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig)

	if (app.name && typeof window !== 'undefined') {
		analytics = getAnalytics(app)
	}

	// Access Firebase services using shorthand notation
	db = getFirestore()
}

export { analytics, db }

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

// getAnalytics(app)

// const firestoreDb = initializeFirestore(app, {
// 	cacheSizeBytes: CACHE_SIZE_UNLIMITED,
// })
// export const db = getFirestore()
// export const projectAuth = getAuth(app)
