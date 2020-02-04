import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../Services/policy.service';
import { Policy } from '../Entities/policy';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-policy-new',
  templateUrl: './policy-new.component.html',
  styleUrls: ['./policy-new.component.sass']
})
export class PolicyNewComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private apiService: PolicyService, private router: Router) {

  }

  policyForm: FormGroup = this.createForm({
    _id: "",
    name: "",
    description: "",
    amountMonthsCoverage: 0,
    price: 0,
    coveringType: 1,
    coveragePercentage: 0,
    riskType: 1,
  });

  private createForm(model: Policy): FormGroup {
    return this.formBuilder.group(model);
  }

  save() {
    this.apiService.createPolicy(this.policyForm.value).subscribe(response => {
      if (response.actionResponse.success) {
        this.router.navigate(['policies']);
      }

      alert(response.actionResponse.message.text);
    });
  }

  cancel() {
    this.router.navigate(['policies']);
  }

  ngOnInit() {
  }

}
