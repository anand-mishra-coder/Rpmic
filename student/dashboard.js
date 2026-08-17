import { auth, db } from "../assets/js/firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
onAuthStateChanged(auth, async user => {
  if (!user) return location.href="../login.html";
  const snap=await getDoc(doc(db,"users",user.uid));
  const role=snap.data()?.role;
  if(role!=="student") location.href="../login.html";
});
