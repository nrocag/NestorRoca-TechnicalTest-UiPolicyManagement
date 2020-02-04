import { Component, OnInit, Input } from '@angular/core';
import { PolicyService } from '../Services/policy.service';
import { Policy } from '../Entities/policy';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-policy-edit',
  templateUrl: './policy-edit.component.html',
  styleUrls: ['./policy-edit.component.sass']
})


export class PolicyEditComponent implements OnInit {

  public id: string;

  constructor(private formBuilder: FormBuilder, private apiService: PolicyService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
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

  private updateForm(model: Partial<Policy>): void {
    this.policyForm.patchValue(model)
  }

  save() {
    console.log(this.policyForm.value);
    this.apiService.updatePolicy(this.policyForm.value).subscribe(response => {
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
    this.apiService.getPolicyById(this.id).subscribe(response => {
      if (response.actionResponse.success) {
        this.updateForm(response.policy);
      }
      else {
        alert(response.actionResponse.message.text)
      }
    });
  }


}
