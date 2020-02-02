import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../Services/policy.service';
import { Policy } from '../Entities/policy';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy-new',
  templateUrl: './policy-new.component.html',
  styleUrls: ['./policy-new.component.sass']
})
export class PolicyNewComponent implements OnInit {

  constructor(private fb: FormBuilder) {

  }

  policyForm: FormGroup = this.createForm({
    name: ["", [Validators.required]],
    description: "",
    amountMonthsCoverage: 0,
    price: 0,
    coveringType: 1,
    coveragePercentage: 0,
    riskType: 1,
  });

  private createForm(model: Policy): FormGroup {
    return this.fb.group(model);
  }

  private updateForm(model: Partial<Policy>): void {
    this.policyForm.patchValue(model)
  }

  save() {
    console.log(this.policyForm.value);
  }


  cancel() { }

  ngOnInit() {
  }

}
