// 🔥 Firebase imports (USE THIS)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

// 🔑 YOUR CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAePrb-yYKqiFKTKj0pMQi2P6hOjeEvXmg",
  authDomain: "zulu-novels.firebaseapp.com",
  projectId: "zulu-novels",
  storageBucket: "zulu-novels.firebasestorage.app",
  messagingSenderId: "283912034336",
  appId: "1:283912034336:web:a403943a6918f1fdfa0445",
  measurementId: "G-Y8JNZBW1YP"
};

// 🚀 Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📚 Load novels from Firebase
async function loadNovels() {
  const querySnapshot = await getDocs(collection(db, "novels"));

  const novels = [];

  querySnapshot.forEach((doc) => {
    novels.push({ id: doc.id, ...doc.data() });
  });

  displayNovels(novels);
}

// 🎨 Display novels
function displayNovels(list) {
  const container = document.getElementById("novel-list");
  container.innerHTML = "";

  list.forEach(novel => {
    container.innerHTML += `
      <div class="novel-card">
        <img src="${novel.image}" />
        <h3>${novel.title}</h3>
        <p>${novel.category}</p>
      </div>
    `;
  });
}

// ▶️ Start app
loadNovels();