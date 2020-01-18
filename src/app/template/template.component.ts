import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent  {
  datepicker=new Date().toISOString().slice(0,10)
  model: any = {};
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    // console.log(a);
  }

}
