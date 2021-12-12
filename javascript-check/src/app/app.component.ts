import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'javascript-check';
  public deletedIndex: any = [];
  public selectedArray: any = [
    'REPM.Action.Portfolio.dcf.dcfCompare.keyExportWorksheet',
    'REPM.Action.Portfolio.dcf.keyRateCompare.keyExportWorksheet',
    'REPM.Action.Property.dcf.dcf.keyExport',
    'REPM.Action.Property.dcf.dcf.reports',
    'REPM.Action.Property.dcf.keyCapex.keyExport',
    'REPM.Action.Property.dcf.keyObjectRent.keyExport',
    'REPM.Action.Property.dcf.keyScenario.reports',
    'REPM.Action.Property.dcf.keyVacancy.keyExport',
    'REPM.View.Portfolio.dcf.dcfCompare',
    'REPM.View.Portfolio.dcf.keyPortfolioDetail',
    'REPM.View.Portfolio.dcf.keyPortfolioDetail.keyCapex',
    'REPM.View.Portfolio.dcf.keyPortfolioDetail.keydcf',
    'REPM.View.Portfolio.dcf.keyPortfolioDetail.keyVacancy',
    'REPM.View.Portfolio.dcf.keyRateCompare',
    'REPM.View.Portfolio.dcf.keyScenario',
    'REPM.View.Portfolio.dcf.keySelection',
    'REPM.View.Portfolio.dcf.main',
    'REPM.View.Property.dcf',
    'REPM.View.Property.dcf.keyCapex',
    'REPM.View.Property.dcf.keyDiscountRate',
    'REPM.View.Property.dcf.keyObjectRent',
    'REPM.View.Property.dcf.keyScenario',
    'REPM.View.Property.dcf.keyVacancy',
    'REPM.View.Property.dcf.main',
  ];


  public ngOnInit() {
    this.splitAndRemoveData();
  }

  public splitAndRemoveData() {
    console.log('selectedArray Before Operation', this.selectedArray);

    var tempArray1 = this.selectedArray;
    var tempArray2 = this.selectedArray;

    for (let i = 0; i < this.selectedArray.length - 1; i++) {
      if (
        tempArray2[i + 1].substring(0, tempArray2[i + 1].lastIndexOf('.')) ===
        tempArray1[i]
      ) {
        console.log('redundant parent', tempArray1[i]);
        this.deletedIndex.push(i);
      }
    }

    console.log('index to be deleted', this.deletedIndex);

    for(let i= this.deletedIndex.length;i>0;i--){
      console.log(this.deletedIndex[i-1])
      this.selectedArray.splice(this.deletedIndex[i-1], 1);
    }

    console.log('selectedArray After Operation', this.selectedArray);
    
    //var rest = str.substring(0, str.lastIndexOf("/") + 1);
    //var last = str.substring(str.lastIndexOf("/") + 1, str.length);
    //console.log(rest);
    //console.log(last);

    //console.log("Array Before Operation",strArray)
  }
}
