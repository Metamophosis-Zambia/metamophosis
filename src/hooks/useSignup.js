import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { projectAuth } from '../firebase/config';
// import { Navigate } from 'react-router-dom';
export default function useSignup() {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const signup = async (email, password) => {
		setError(null);
		setLoading(true);

		try {
			const res = await createUserWithEmailAndPassword(projectAuth, email, password);

			if (!res) {
				throw new Error('Error creating user');
			}

			setLoading(false);
			setError(false);
		} catch (err) {
			setError(err.message);
			// console.log(err.mesage);
			setLoading(false);
		}
	};
	return { signup, loading, error };
}
