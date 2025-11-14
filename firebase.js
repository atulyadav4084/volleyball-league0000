// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBGEmX2NAQGVXyZN42QaYvyL4PDPsH0GS4",
  authDomain: "volleyball-tournament-9462a.firebaseapp.com",
  databaseURL: "https://volleyball-tournament-9462a-default-rtdb.firebaseio.com/",
  projectId: "volleyball-tournament-9462a",
  storageBucket: "volleyball-tournament-9462a.firebasestorage.app",
  messagingSenderId: "22354345740",
  appId: "1:22354345740:web:07f729ebd97a93f77ed329",
  measurementId: "G-Z633WD1NEX"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
