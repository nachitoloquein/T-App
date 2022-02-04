import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {

  darkMode: boolean = true;

  constructor(private renderer: Renderer2, 
              private authservice : AuthService, 
              private popoverController: PopoverController,
              private alertController: AlertController
              ){  /* const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
              this.darkMode = prefersDark.matches; */}

  ngOnInit() {}

/*   cambio() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
    
  } */

  async dismissPopover() {
    await this.popoverController.dismiss();
  }

  async alert() {
    const alert = await this.alertController.create({
      header: '¿Salir de T-App?',
      buttons: [
        {
        text: 'Salir',
        handler:()=>{
          this.cerrarSesion();
        }}
        ,{
          text:'Cancelar',
          role: 'cancel'
        }],
    });
    await alert.present();
  }

  cerrarSesion(){  
    this.dismissPopover();
    this.authservice.logout();
  }

}
