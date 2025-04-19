const firebaseConfig = {
  apiKey: "AIzaSyBxtvz8KqN5knzovcYRHdXxMtcUDhDYI1g",
  authDomain: "insidexbr.firebaseapp.com",
  projectId: "insidexbr",
  storageBucket: "insidexbr.appspot.com",
  messagingSenderId: "166788819502",
  appId: "1:166788819502:web:b9d4135d4693a2f5eb8dbf"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-message");
  errorMsg.innerText = "";

  if (!email || !password) {
    errorMsg.innerText = "Preencha todos os campos.";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      if (error.code === "auth/user-not-found") {
        errorMsg.innerText = "Usuário não encontrado.";
      } else if (error.code === "auth/wrong-password") {
        errorMsg.innerText = "Senha incorreta.";
      } else {
        errorMsg.innerText = "Erro: " + error.message;
      }
    });
}

function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      document.getElementById("error-message").innerText = "Erro no login com Google: " + error.message;
    });
}