import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  rform: FormGroup;
  dateInPastdays=new Date().toISOString().slice(0,10)
  constructor(private fb:FormBuilder) { }


  ngOnInit() {
    this.rform=this.fb.group({
      fname: ['', [Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]],
      phone: ['', [Validators.required,Validators.pattern('[7-9][0-9]{9}')]],
      dat:['',Validators.required]
    })
  }
  get f(){
    return this.rform.controls
  }
  submitted=false;
  onsubmit(x){
    this.submitted=true;
  if(this.rform.invalid){
    
    return
  }
  (this.rform.value)
  console.log(x)
}
}
