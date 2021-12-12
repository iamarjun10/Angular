import { Syncdata } from './models/syncdata';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

import { StudentDataService } from './services/student-data.service';
import { Student } from './models/student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StudentDataService]
})
export class AppComponent implements AfterViewInit, OnInit {

  title = 'ui-design';
  
  studentArray: Student[] = [];
  syncDataArray: Syncdata[] = [];

  constructor(private dataService: StudentDataService){
    this.studentArray = this.dataService.getStudents();
    this.syncDataArray = this.dataService.getSyncData();
  }


  ngOnInit(): void {
    
  }


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = [
    "isChecked",
    "entity_Name",
    "external_Id",
    "previous_env",
    "current_env",
  ];

  selection = new SelectionModel<PeriodicElement>(true, []);

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.filteredData.length;
    return numSelected === numRows;
  }

  toggleSelectionAll(): void {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.filteredData.forEach((row: PeriodicElement) => this.selection.select(row));
    //this.computeTotal();    

    console.log("Mock Student Data ", this.studentArray);
    console.log("Mock Sync Data", this.syncDataArray);
  }

  toggleSelection(row: PeriodicElement): void  {
    this.selection.toggle(row);
    
    //this.computeTotal();
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

// export interface PeriodicElement {
//   position: number;
//   isChecked: boolean;
//   name: string;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, isChecked: false, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   { position: 2, isChecked: false, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   { position: 3, isChecked: false, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   { position: 4, isChecked: false, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   { position: 5, isChecked: false, name: 'Boron', weight: 10.811, symbol: 'B'},
//   { position: 6, isChecked: false, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   { position: 7, isChecked: false, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   { position: 8, isChecked: false, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   { position: 9, isChecked: false, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   { position: 10, isChecked: false, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   { position: 11, isChecked: false, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   { position: 12, isChecked: false, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   { position: 13, isChecked: false, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   { position: 14, isChecked: false, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   { position: 15, isChecked: false, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   { position: 16, isChecked: false, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   { position: 17, isChecked: false, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   { position: 18, isChecked: false, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   { position: 19, isChecked: false, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   { position: 20, isChecked: false, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
