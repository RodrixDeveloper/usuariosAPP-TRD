import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css'],
})
export class ListUsuariosComponent implements OnInit {
  listUsuario: any[] = [];
  loading: boolean = true;
  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe((data) => {
      this.listUsuario = data;
      this.loading= false
      console.log(this.listUsuario);
    });
  }
}
