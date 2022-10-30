import { FirebaseConfig } from "../keys/FirebaseConfig";
import { initializeApp } from "firebase/app";

class Firebase {
  constructor() {
    this.app = initializeApp(FirebaseConfig);
  }
  getFirestoreDb() {
    return this.getFirestoreDb(this.app);
  }
}

export { Firebase };
