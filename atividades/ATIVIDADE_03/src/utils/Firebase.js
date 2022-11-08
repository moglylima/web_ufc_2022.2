import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { FirebaseConfig } from "../keys/FirebaseConfig";

class Firebase {
  constructor() {
    this.app = initializeApp(FirebaseConfig);
  }

  getFirestoreDb() {
    return getFirestore(this.app);
  }
}

export { Firebase };
