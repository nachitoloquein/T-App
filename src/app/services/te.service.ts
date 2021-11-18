import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tea {
  nombre: string,
  dificultad: number,
  urlNacionalidad: string,
  id: string,
  foto: string,
  instrucciones: string,
  temperatura: string,
  tipoTe: string,
  favorito: boolean
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
  }

  ejecutarTiempoReal(){
    this.teas = this.teasCollections.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Tea;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

 

  listaTeas(){
    this.teasCollections = this.db.collection<Tea>('te');
    this.ejecutarTiempoReal();
    return this.teas;
  }

  OrdernarPor(cosa){
   this.teasCollections = this.db.collection<Tea>('te', ref => ref.orderBy(cosa));
   this.ejecutarTiempoReal();
   return this.teas;
  }

  listaFavoritos(){
  this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('favorito','==', true ));
   this.ejecutarTiempoReal();
   return this.teas;
  }

  FiltrarTipoTe(tt){
   this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('tipoTe', '==',tt ));
   this.ejecutarTiempoReal();
   return this.teas;
  }

  FiltrarPorTemperatura(tem){
    this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('temperatura', '==', tem));
    this.ejecutarTiempoReal();
    return this.teas;
  }

  FiltrarPorNacionalidad(nac){
    this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('urlNacionalidad', '==', nac ));
    this.ejecutarTiempoReal();
    return this.teas;
   }

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
    }));
  }

  likeTea(tea){
    this.db.doc<Tea>(`te/${tea.id}`).update({favorito: true});
  }

  dislikeTea(tea){
    this.db.doc<Tea>(`te/${tea.id}`).update({favorito: false});
  }
}
