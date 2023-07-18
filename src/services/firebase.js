import {
  addDoc,
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,setDoc,
  serverTimestamp,
  orderBy,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "../lib/firebase";

const db = getFirestore();
const colRef = collection(db, "users");
const auth = getAuth();

export const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const addingDoc = async (email, username, fullname, userid) => {
  return await addDoc(colRef, {
    email,
    username,
    fullname,
    dateCreated: Date.now(),
    userid,
  });
};


export const signingIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const createUserProfile = async (id, profileId, username,imgPath) => {
  const docRef = collection(doc(colRef, id), "profile");
  const profileDoc = doc(docRef, profileId);
   await setDoc(profileDoc, {
    profilename: username,
    profileId,
    myList: [],
    imgPath,
    createdAt: serverTimestamp(),
  });
};

export const getuserByUserId = async (userId) => {
  const q = query(colRef, where("userid", "==", `${userId}`));
  const doc = await getDocs(q);
  return doc.docs[0].id;
};

export const getProfileDoc = async (userid) => {
  const docRef = collection(doc(colRef, userid), "profile");
  const q = query(docRef, orderBy("createdAt"));
  const data = await getDocs(q);
  
  let profileData = [];
  
  data.docs.forEach((doc) => {
    profileData.push({ ...doc.data() });
  });
  
  profileData.forEach((e) => {
    delete e["createdAt"];
  });
  
  return profileData;
};

export const checkUsername = async (username) => {
  const q = query(colRef, where("username", "==", `${username}`));
  const user = await getDocs(q);

  return user.docs.length;
};


export const activeProfile=async (userid,profileId)=>{
  const docRef = collection(doc(colRef, userid), 'profile');
  const profileDocRef = doc(docRef, profileId);
  const data = await getDoc(profileDocRef);
  return  data.data()
}

export const addToList = async (userid, profId, content) => {
  const docRef = collection(doc(colRef, userid), 'profile');
  const ref = doc(docRef, profId);
  
  return await updateDoc(ref, {
    myList: arrayUnion(content),
  });
};


export const removeFromList = async (userid, profId, content) => {
  const docRef = collection(doc(colRef, userid), 'profile');
  const ref = doc(docRef, profId);

  return await updateDoc(ref, {
    myList: arrayRemove(content),
  });
};

export const updateDocument=async(userid,profId,newName,imgPath)=>{
  const docRef = collection(doc(colRef, userid), "profile");
const ref=doc(docRef,profId)

  return await updateDoc(ref,{
    profilename:newName,
    imgPath,
  })
}


export const deleteDocument=async (userid,profileId)=>{
  const docRef = collection(doc(colRef, userid), "profile");
  const document=doc(docRef,profileId)

  return await deleteDoc(document)

}
export const signOutUser=async()=>{
  return await signOut(auth);
}