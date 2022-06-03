class App {
    constructor(){



        this.$app = document.querySelector("#app");
        this.$firebaseAuthContainer = document.querySelector("#firebaseui-auth-container")
        this.$app.style.display ="none";



        this.ui = new firebaseui.auth.AuthUI(auth);
        this.handleAuth();
     
    }

    handleAuth() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
       
          this.redirectToApp();
          // ...
        } else {
          this.redirectToAuth();
          // User is signed out
          // ...
        }
      });
    }
    redirectToApp(){
      this.$firebaseAuthContainer.style.display="none";
      this.$app.style.display="block";
    }
    redirectToAuth(){

      this.$firebaseAuthContainer.style.display="block";
      this.$app.style.display="auth";

      this.ui.start('#firebaseui-auth-container', {
        signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // Other config options...
        }); 
    }


     
    
}


const app = new App();