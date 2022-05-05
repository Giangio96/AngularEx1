import { Component, OnInit } from '@angular/core';
import { Genere, Ruoli } from '../model/Enum';
import { User } from '../model/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor() { }

  user = new User(99999,'mario','luca',32,new Date('13/02/1995'),Ruoli.admin,'PippoBaudo','quic/ce/la/img',{city:'roma',street:'fatticaz',postalCode:'tua'},[{id:9999,name: 'MikeBuongiorno', description: 'nonloso', location: { city: 'roma', street: 'arilol',postalCode: 'lol'}}],Genere.male)

  ngOnInit(): void {
  //non l'ho messo qua perche non ci sono riuscito poi a farlo funzionare nell html
  }

}
