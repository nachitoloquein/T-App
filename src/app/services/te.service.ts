import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, sortedChanges } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tea } from '../models/tea';


@Injectable({
  providedIn: 'root'
})

export class TeService {

  private teasCollections: AngularFirestoreCollection<Tea>;
  private teas: Observable<Tea[]>;
  private tea: Observable<Tea>;
  private teaDoc: AngularFirestoreDocument<Tea>;

  //inicializacion de la variable teas
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

  //Read
  getTeas(){
    return this.teas;
  }

  getTeaById(idTea: string){
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

  ejecutarTiempoReal(){
    this.teas = this.teasCollections.snapshotChanges().pipe(map(actions =>{
      return actions.map(a =>{
        const data = a.payload.doc.data() as Tea;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  OrdernarPor(cosa){
   this.teasCollections = this.db.collection<Tea>('te', ref => ref.orderBy(cosa).where('favorito','==', true));
   this.ejecutarTiempoReal();
   return this.teas;
  }

  listaFavoritos(){
  return this.getTeas().pipe(map(teas => teas.filter(teas => teas.favorito)))

  /* this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('favorito','==', true ));
   this.ejecutarTiempoReal();
   return this.teas; */

  }

  FiltrarTipoTe(tt){
   this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('tipoTe', '==',tt ).where('favorito','==', true));
   this.ejecutarTiempoReal();
   return this.teas;
  }

  FiltrarPorTemperatura(tem){
    this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('temperatura', '==', tem).where('favorito','==', true));
    this.ejecutarTiempoReal();
    return this.teas;
  }

  FiltrarPorNacionalidad(nac){
    this.teasCollections = this.db.collection<Tea>('te', ref => ref.where('urlNacionalidad', '==', nac ).where('favorito','==', true));
    this.ejecutarTiempoReal();
    return this.teas;
   }

  

  likeTea(tea){
    this.db.doc<Tea>(`te/${tea.id}`).update({favorito: true});
  }

  dislikeTea(tea){
    this.db.doc<Tea>(`te/${tea.id}`).update({favorito: false});
  }
}
