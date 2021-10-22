import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { orderBy, query, limit } from 'firebase/firestore';

export interface Tea {
  nombre: string,
  dificultad: number,
  urlNacionalidad: string,
  id: string,
  foto: string,
  instrucciones: string,
  temperatura: string,
  tipoTe: string,
}

@Injectable({
  providedIn: 'root'
})

export class TeService {

  private teasCollections: AngularFirestoreCollection<Tea>;
  private teas: Observable<Tea[]>;
  private tea: Observable<Tea>;
  private teaDoc: AngularFirestoreDocument<Tea>;

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

  /* OrdernarPorNombre(){
    return this.db.collection('te', ref => ref.orderBy('nombre'));
  } */

  ObtenerTe(idTea: string){
    this.teaDoc =  this.db.doc<Tea>(`te/${idTea}`);
    return this.tea = this.teaDoc.snapshotChanges().pipe(map(action=>{
      if (action.payload.exists==false){
        return null;
      }else{
        const data = action.payload.data() as Tea;
        data.id = action.payload.id;
        return data;
      }
    }))
  }
}
