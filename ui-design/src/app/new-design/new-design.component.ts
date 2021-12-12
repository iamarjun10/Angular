import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-new-design',
  templateUrl: './new-design.component.html',
  styleUrls: ['./new-design.component.scss']
})
export class NewDesignComponent implements AfterViewInit {
  displayedColumns: string[] = [
    "isChecked",
    "entity_Name",
    "external_Id",
    "previous_env",
    "current_env",
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public print(data:any){
    console.log("checked row", data)
  }

}


export interface PeriodicElement {
  entity_Name: string;
  external_Id: string;
  position: number;
  previous_env: string;
  current_env: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    entity_Name: "Lincense",
    external_Id: "AgentSelly_AG1",
    previous_env: "AgentSelly",
    current_env: "AgentSelly",
  },
  {
    position: 2,
    entity_Name: "Product",
    external_Id: "Alfred_Müller_AG",
    previous_env: "Alfred_Müller_AG",
    current_env: "Alfred_Müller_AG",
  },
  {
    position: 3,
    entity_Name: "Role",
    external_Id: "ANC_Customer",
    previous_env: "ANC_Customer",
    current_env: "ANC_Customer",
  },
  {
    position: 4,
    entity_Name: "Customer",
    external_Id: "Fake_Customer",
    previous_env: "Fake_Customer",
    current_env: "Fake_Customer",
  },
  {
    position: 5,
    entity_Name: "Role",
    external_Id: "Marcos_Ybarra",
    previous_env: "Marcos_Ybarra",
    current_env: "Marcos_Ybarra",
  },
  {
    position: 6,
    entity_Name: "User",
    external_Id: "Subham_Customer",
    previous_env: "Subham_Customer",
    current_env: "Subham_Customer",
  },
  {
    position: 7,
    entity_Name: "Data Filter",
    external_Id: "REPM_SUVA",
    previous_env: "REPM_SUVA",
    current_env: "REPM_SUVA",
  },
  {
    position: 8,
    entity_Name: "Group",
    external_Id: "REPM_BEWI",
    previous_env: "REPM_BEWI",
    current_env: "REPM_BEWI",
  },
  {
    position: 9,
    entity_Name: "IP Range",
    external_Id: "REPM_CPV",
    previous_env: "REPM_CPV",
    current_env: "REPM_CPV",
  },
  {
    position: 10,
    entity_Name: "Application",
    external_Id: "REPM_Customer",
    previous_env: "REPM_Customer",
    current_env: "REPM_Customer",
  },
  {
    position: 11,
    entity_Name: "Permission Set",
    external_Id: "Alfred_Müller_AG",
    previous_env: "Alfred_Müller_AG",
    current_env: "Alfred_Müller_AG",
  },
  {
    position: 12,
    entity_Name: "Role",
    external_Id: "AgentSelly_AG2",
    previous_env: "AgentSelly_AG2",
    current_env: "AgentSelly_AG2",
  },
  {
    position: 13,
    entity_Name: "Customer",
    external_Id: "Auth_Admin",
    previous_env: "Auth_Admin",
    current_env: "Auth_Admin",
  },
  {
    position: 14,
    entity_Name: "Lincense",
    external_Id: "AMS_Customer",
    previous_env: "AMS_Customer",
    current_env: "AMS_Customer",
  },
  {
    position: 15,
    entity_Name: "IP Range",
    external_Id: "ABN_Customer",
    previous_env: "ABN_Customer",
    current_env: "ABN_Customer",
  },
  {
    position: 16,
    entity_Name: "Lincense",
    external_Id: "Insurance_Value",
    previous_env: "Insurance_Value",
    current_env: "Insurance_Value",
  },
  {
    position: 17,
    entity_Name: "Feature",
    external_Id: "Identity_Server",
    previous_env: "Identity_Server",
    current_env: "Identity_Server",
  },
  {
    position: 18,
    entity_Name: "Role",
    external_Id: "Framework-ui",
    previous_env: "Framework-ui",
    current_env: "Framework-ui",
  },
  {
    position: 19,
    entity_Name: "Lincense",
    external_Id: "Alfred_Müller_AG3",
    previous_env: "Alfred_Müller_AG3",
    current_env: "Alfred_Müller_AG3",
  },
  {
    position: 20,
    entity_Name: "Product",
    external_Id: "AgentSelly_AG3",
    previous_env: "AgentSelly_AG3",
    current_env: "AgentSelly_AG3",
  },
];
