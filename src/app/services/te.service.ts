import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TeService {

  constructor( private db: AngularFirestore) { }

  getTea(){
    return this.db.collection('te').snapshotChanges()
  }
}
