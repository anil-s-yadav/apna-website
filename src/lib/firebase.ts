/**
 * Firebase initialization for Apna Website
 *
 * To configure Firebase:
 * 1. Create a Firebase project at https://console.firebase.google.com
 * 2. Enable Google Analytics in project settings
 * 3. Create a .env file in the project root with these values:
 *
 *    VITE_FIREBASE_API_KEY=your_api_key
 *    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
 *    VITE_FIREBASE_PROJECT_ID=your_project_id
 *    VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
 *    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
 *    VITE_FIREBASE_APP_ID=your_app_id
 *    VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
 */

import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "",
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

// Only initialize Firebase if config is present
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    app = initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
      analytics = getAnalytics(app);
    }
  } catch (error) {
    console.warn("Firebase initialization failed:", error);
  }
} else {
  console.info(
    "Firebase not configured. Add VITE_FIREBASE_* env variables to enable analytics.",
  );
}

export { app, analytics };
