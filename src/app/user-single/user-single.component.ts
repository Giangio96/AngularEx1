import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

   @Input('userBaudo') userBaudo: any

   @Output('cancella') delete = new EventEmitter();
   
   onDelete(){
      this.delete.emit(this.userBaudo.id)
    }


  constructor() { }

  ngOnInit(): void {

  }

}

