import { Component, Renderer2} from '@angular/core';
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  constructor(private renderer: Renderer2,
    public authservice : AuthService) { }

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

  OnLogout(){
    this.authservice.logout()
  }
}
