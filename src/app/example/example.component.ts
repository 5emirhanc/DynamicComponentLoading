import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  validateForm!: UntypedFormGroup;

  onClick(){
    console.log('submit', this.validateForm.value);
  }
  
  constructor(private fb: UntypedFormBuilder) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ["",[Validators.required]],
      password: ["",[Validators.required]],
    
    });
  }
}
