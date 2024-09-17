import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCabP96KVVKcdwd80VvcC_z1fXx7ijE2MY",
  authDomain: "shop-ease-6a4b9.firebaseapp.com",
  projectId: "shop-ease-6a4b9",
  storageBucket: "shop-ease-6a4b9.appspot.com",
  messagingSenderId: "146576432172",
  appId: "1:146576432172:web:a1f70d5205cf815bc14589",
  measurementId: "G-LZ2C7HZT0W",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const auth = getAuth();

export const googleSignin = () => {
  const result = signInWithPopup(auth, provider);
  return result;
};

export const createUserDoc = async (userCredentials) => {
  const userDocRef = doc(db, "users", userCredentials.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (userSnapShot.exists()) {
    return userSnapShot;
  }

  const { displayName, email } = userCredentials;
  await setDoc(userDocRef, {
    name: displayName,
    email,
    createdAt: new Date().getTime(),
  });
  return userSnapShot;
};

export const createAuthUserWithEmail = async (userCredentials) => {
  const { email, password, name } = userCredentials;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await createUserDoc({ ...user, displayName: name });
};

export const loginAuthUserWithEmail = async (userCredentials) => {
  const { email, password } = userCredentials;
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
