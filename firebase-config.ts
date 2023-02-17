// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD426aI_0W4xEFgxN2N-0KP57H_XYnF2xY',
  authDomain: 'resume-67ba7.firebaseapp.com',
  projectId: 'resume-67ba7',
  storageBucket: 'resume-67ba7.appspot.com',
  messagingSenderId: '305292917609',
  appId: '1:305292917609:web:496481a3384b1ecc471bf8',
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const database = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth();

// export const app = initializeApp(firebaseConfig);
