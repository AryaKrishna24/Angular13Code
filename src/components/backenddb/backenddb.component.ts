import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpserviceService } from 'src/services/empservice.service';

@Component({
  selector: 'app-backenddb',
  templateUrl: './backenddb.component.html',
  styleUrls: ['./backenddb.component.css'],
  providers:[EmpserviceService]
})
export class BackenddbComponent implements OnInit {

  constructor(private _Empservice:EmpserviceService) { }

  empForm!: FormGroup;
  empdetails:any[]=[];

  ngOnInit(): void {

    this.empForm=new FormGroup({
      'empName': new FormControl(null),
      'empDept': new FormControl(null)

    })
  }

  onPushEmpDetails(){
    const empName = this.empForm.get('empName')?.value;
    const empDept = this.empForm.get('empDept')?.value;
    console.log(this.empForm.value);
    this.empdetails.push({
      empName:empName,
      empDept:empDept
    })

    this._Empservice.saveEmpDetails(this.empdetails).subscribe(sub => {
      console.log(sub);
    },

    error => {
      console.log(error);
    }
  )
  }

}
