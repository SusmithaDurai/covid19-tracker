import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import { CountryReport } from '../CountryReport';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  ELEMENT_DATA:CountryReport[];
  
  displayedColumns: string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReport>(this.ELEMENT_DATA);

  constructor(private service:Covid19Service) { }

  ngOnInit(): void {

    this.service.getcovid19Report().subscribe((data:CountryReport[])=>{
      console.log(data);  
      this.dataSource.data=data as CountryReport[];
    })
  }

}
