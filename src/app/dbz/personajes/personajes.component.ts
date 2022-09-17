import { Component, Input, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent  {

//  @Input() personajes: any[] =[];

  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService){}
}
