import { Component, OnInit } from "@angular/core";
import { AfterViewInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SmplcService } from 'src/app/shared/service/smplc.service';

@Component({
  selector: 'self-assessment-dashbroad-dialog',
  templateUrl: 'self-assessment-dashbroad-dialog.component.html',
  styleUrls:['self-assessment-dashbroad-dialog.component.scss']
})
export class SelfAssessmentDashbroadDialog {
  listData: any;
  selfAssessmentForm: FormGroup;
  constructor(private service: SmplcService, private formBuilder :FormBuilder){}

  ngOnInit() {
    this.getselfAssesmetList();
    this.createForm()
  }

  getselfAssesmetList() {
    let payload = {
      "request": {
        "token": JSON.parse(localStorage.getItem('SMPLUser')).token,
      },
      "pageSize": 0,
      "pageNumber": 0
    }
    this.service.assesmentList(payload).subscribe((res)=> {
       this.listData = res.items;
    }, (err)=> {})
  }

  createForm() {
    this.selfAssessmentForm = this.formBuilder.group({
      sSubscriptionName: ['', Validators.required],
    })
  }
  get selfAssessmentUserForm() { return this.selfAssessmentForm.controls; }

  onSubmit() {
    let payload ={
      "request": {
          "tenantId": 0,
              "iSubscriptionID": 0,
                "sSubscriptionName": "string",
                  "sLevel": "string"
      },
      "pageSize": 0,
        "pageNumber": 0
    }
    this.service.getSubscriptionById(payload).subscribe((res) => {
      this.listData = res.items;
    }, (err) => { })
  }
}