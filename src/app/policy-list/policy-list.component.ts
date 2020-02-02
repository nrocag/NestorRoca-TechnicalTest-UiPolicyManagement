import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../Services/policy.service';
import { Policy } from '../Entities/policy';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.sass']
})
export class PolicyListComponent implements OnInit {

  constructor(public apiService: PolicyService) {
    console.log("pase por aca");
  }

  private policies: Array<Policy>[];

  getData() {
    this.apiService.getAllPolicies().subscribe(response => {
      console.log("pase por aca", response);
      this.policies = response;
    });
  }

  ngOnInit() {
    this.getData();
  }

}
