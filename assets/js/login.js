import { auth, db } from "./firebase-config.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const button = document.querySelector("#googleLogin");
const status = document.querySelector("#status");

button.addEventListener("click", async () => {
  button.disabled = true;
  status.textContent = "Opening Google sign-in…";
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const ref = doc(db, "users", result.user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        name: result.user.displayName || "",
        email: result.user.email || "",
        photoURL: result.user.photoURL || "",
        role: "student",
        active: true,
        createdAt: new Date().toISOString()
      });
    }

    const role = (await getDoc(ref)).data()?.role || "student";
    location.href = role === "admin" ? "admin/dashboard.html" :
                    role === "teacher" ? "teacher/dashboard.html" :
                    role === "principal" ? "principal/dashboard.html" :
                    "student/dashboard.html";
  } catch (error) {
    console.error(error);
    status.textContent = error.message || "Sign-in failed.";
    button.disabled = false;
  }
});
