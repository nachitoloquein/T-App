import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

export interface tea {
  nombre: string
  dificultad: number
  urlNacionalidad: string
  id: string
  foto: string
}

@Injectable({
  providedIn: 'root'
})
export class TeService {

  constructor( private db: AngularFirestore) { }

  getTea(){
    return this.db.collection('te').snapshotChanges().pipe(map(tes=>{
      return tes.map(a =>{
        const data = a.payload.doc.data() as tea;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }
}
