import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tea {
  nombre: string,
  dificultad: number,
  urlNacionalidad: string,
  id: string,
  foto: string
}

@Injectable({
  providedIn: 'root'
})

export class TeService {

  private teasCollections: AngularFirestoreCollection<Tea>;
  teas: Observable<Tea[]>;

  constructor( private db: AngularFirestore) { 
    this.teasCollections = db.collection<Tea>('te');
    this.teas = this.teasCollections.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Tea;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  listaTeas(){
    return this.teas;
  }

  ObtenerTe(id){
    
  }
}
