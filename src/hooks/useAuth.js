
// import { useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const auth = getAuth();

// const useAuth = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   return user;
// };

// export default useAuth;
