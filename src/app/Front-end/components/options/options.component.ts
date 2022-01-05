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

  constructor(private renderer: Renderer2, 
              private authservice : AuthService, 
              private popoverController: PopoverController,
              private alertController: AlertController
              ) {}

  ngOnInit() {}

  onToggleColorTheme(event){
    console.log(event.detail.checked);
    if (event.detail.checked){
      //document.body.setAttribute('color-theme', 'dark');
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
    }
    else{
      //document.body.setAttribute('color-theme', 'light');
      this.renderer.setAttribute(document.body, 'color-theme', 'light')
    }
  }

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
