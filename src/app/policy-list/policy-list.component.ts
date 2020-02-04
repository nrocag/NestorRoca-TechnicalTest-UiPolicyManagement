import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../Services/policy.service';
import { Policy } from '../Entities/policy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.sass']
})
export class PolicyListComponent implements OnInit {

  constructor(public apiService: PolicyService, public router: Router) {
  }

  public policies: Array<Policy>[];

  getData() {
    this.apiService.getAllPolicies().subscribe(response => {
      if (response.actionResponse.success) {
        this.policies = response.policies;
      }
      else {
        alert(response.actionResponse.message.text);
      }
    });
  }

  new() {
    this.router.navigate(['policynew']);
  }

  edit(id: string) {
    this.router.navigate(['policyedit'], { queryParams: { id: id } });
  }

  delete(id: string) {
    this.apiService.deletePolicy(id).subscribe(response => {
      if (response.actionResponse.success) {
        this.getData();
      }

      alert(response.actionResponse.message.text);
    });
  }

  ngOnInit() {
    this.getData();
  }
}
