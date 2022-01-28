import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from 'firebase/auth';

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getFirestore,
    onSnapshot,
    updateDoc,
} from 'firebase/firestore';

import { firebaseConfig } from './config/firebaseConfig';
// import { removeUser, saveUser } from './redux/authSlice';
import { saveProducts } from './redux/productsSlice';

initializeApp(firebaseConfig);
const auth = getAuth();
// export function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
// }

// export function login(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
// }

// export function logOut() {
//     return signOut(auth);
// }

// export function useAuth() {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) dispatch(saveUser(user));
//             else dispatch(removeUser());
//         });
//     }, [auth, dispatch]);
//     const currentUser = useSelector((state) => state.currentUser);
//     return currentUser;
// }

// FireStore section

// Initialize DB
const db = getFirestore();
// Getting Products
// Creating Product Refrence
const productsCollectionRef = collection(db, 'products');
// Adding Product to firestore
export function addProductToFirestore(data) {
    return addDoc(productsCollectionRef, {
        ...data,
        provider: auth.currentUser.email,
    });
}
// Updating existing Product
export function updateProduct(id, data) {
    const specificDoc = doc(db, 'products', id);
    return updateDoc(specificDoc, data);
}
// Deleteing Product from firestore
export function deleteProduct(id) {
    const specificDoc = doc(db, 'products', id);
    return deleteDoc(specificDoc);
}
// Custom Hooks
export const useDatabase = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(() => {
        const getProducts = () => {
            onSnapshot(productsCollectionRef, (doc) => {
                dispatch(
                    saveProducts([
                        ...doc.docs.map((d) => ({
                            ...d.data(),
                            id: d.id,
                        })),
                    ])
                );
            });
        };
        getProducts();
    }, []);
    return products;
};

export {
    auth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
};
