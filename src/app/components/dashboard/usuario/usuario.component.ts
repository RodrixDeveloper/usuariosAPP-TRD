import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  id: number = 0;
  name: string = '';
  email: string = '';
  gender: string = '';
  imgUrl: any = 'https://loremflickr.com/320/240';
  loading: boolean= true;

  constructor(
    private aRoute: ActivatedRoute,
    private _usuarioService: UsuarioService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!; //+: El operador + se utiliza para convertir el valor obtenido en un número si es una cadena.
    console.log(this.id);
  }

  /**
   * !: El signo de exclamación ! se utiliza para indicar que estamos seguros de que el valor devuelto por .get('id') no será nulo.
   *  Esto es necesario porque el método .get('id') puede devolver un valor nulo si no se encuentra el parámetro de ruta en la URL.
   */

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this._usuarioService.getUsuario(this.id).subscribe((data) => {
      console.log(data);
      this.name = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.loading= false;
    });
  }
}
