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

  private policies: Array<Policy>[];

  getData() {
    this.apiService.getAllPolicies().subscribe(response => {
      console.log("pase por aca", response);
      this.policies = response;
    });
  }

  new() {
    this.router.navigate(['policynew']);
  }

  ngOnInit() {
    this.getData();
  }

}
