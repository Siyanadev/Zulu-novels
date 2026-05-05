// 🔥 Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔑 YOUR CONFIG (REPLACE WITH YOUR REAL ONE)
const firebaseConfig = {
  apiKey: "PUT_YOURS",
  authDomain: "PUT_YOURS",
  projectId: "PUT_YOURS",
  storageBucket: "PUT_YOURS",
  messagingSenderId: "PUT_YOURS",
  appId: "PUT_YOURS"
};

// 🚀 Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📚 Load novels
async function loadNovels() {
  const querySnapshot = await getDocs(collection(db, "novels"));

  const novels = [];

  querySnapshot.forEach((doc) => {
    novels.push({ id: doc.id, ...doc.data() });
  });

  displayNovels(novels);
}

// 🎨 Display
function displayNovels(list) {
  const container = document.getElementById("novel-list");
  container.innerHTML = "";

  list.forEach(novel => {
    container.innerHTML += `
      <div class="novel-card" onclick="openNovel('${novel.id}')">
        <img src="${novel.image}" />
        <h3>${novel.title}</h3>
        <p>${novel.category}</p>
      </div>
    `;
  });
}

// 📖 Open story
function openNovel(id) {
  alert("Opening story... (next step we improve this)");
}

// ▶️ Start
loadNovels();
