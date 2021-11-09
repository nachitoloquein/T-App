import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from "@angular/router";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

export interface userInterface{
  id?: string,
  email?: string,
  admin?: boolean
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,
    private router: Router, private afs: AngularFirestore) { }

  login(email: string, password: string){

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  logout(){
    this.AFauth.signOut().then(() =>
    {
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string){
    return new Promise ((resolve, reject)=>{
    this.AFauth.createUserWithEmailAndPassword(email, password)
    .then(res =>{ 
      resolve(res),
      this.updateUserData(res.user)
    }).catch( err=> console.log(reject(err)))
  });
  }
  
  private updateUserData(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: userInterface = {
      id: user.uid,
      email: user.email,
      admin: false
    }
    return userRef.set(data, {merge:true})
  }

  isAdmin(userUid){
    return this.afs.doc<userInterface>(`users/${userUid}`).valueChanges();
  }
}
