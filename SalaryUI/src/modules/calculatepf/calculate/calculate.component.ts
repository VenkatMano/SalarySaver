import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { CalculateInput } from '../models/CalculateInput';
import { CommonserviceService } from 'src/services/commonservice.service';
import { CalculateOutput } from '../models/CalculateOutput';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit, OnChanges{
  calculateInput : CalculateInput = new CalculateInput();

  calculateOutput: CalculateOutput = new CalculateOutput();

  errorOnSalary: Boolean = true;

  errorOnSalaryMessage: string = "Salary cannot be more than 15000"

  @ViewChild('errorDisplay', {static:false})
  errorElement : ElementRef

  constructor(private commonService: CommonserviceService) { }

  ngOnChanges() {
    alert("came");
  }
  ngOnInit() {
    this.calculateInput.basicSalary = 15000;
    this.calculateInput.currentBalance = 0;
    this.calculateInput.currentInterestRate = 8.65;
    this.calculateInput.employerContribution = 3.67;
    this.calculateInput.retirementAge = 58;
    this.calculateInput.yourContribution = 12;
  }

  

  returnBoolean() : Boolean {
    return this.errorOnSalary
  }

  validateInput() : void {
    if(this.calculateInput.basicSalary>15000)
    {
      this.calculateInput.basicSalary = 15000;
      this.errorOnSalary = false;
    }
  }

  calculatePf() : void {
    this.commonService.calculatePfFromBackend(this.calculateInput).subscribe(results => {
      this.calculateOutput = results;      
    });
  }

}
