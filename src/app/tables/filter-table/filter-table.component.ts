
// import { DataSource } from '@angular/cdk/collections';
// import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

// import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
// import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
// import { ExampleDatabase, ExampleDataSource } from './helpers.data';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

// /** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


// @Component({
//   selector: 'cdk-filter-table',
//   templateUrl: './filter-table.component.html',
//   styleUrls: ['./filter-table.component.scss']
// })
// export class FilterTableComponent implements AfterViewInit {

//   // public filterValue = '';
//   // public displayedColumns = ['userId', 'userName', 'progress', 'color'];
//   // public exampleDatabase = new ExampleDatabase();
//   // public dataSource: ExampleDataSource | null;
//   // public showFilterTableCode;
//  // dataSource: MatTableDataSource<UserData>;
//  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
//  dataSource: MatTableDataSource<UserData>;


//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
  
  
//   // @ViewChild('filter', { static: true }) filter: ElementRef;

//   constructor() { }

//     ngAfterViewInit() {
//       this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//       // this.dataSource = new DataSource(this.exampleDatabase);
//       // this.dataSource = new ExampleDataSource(this.exampleDatabase);

//       // this.dataSource.filterPredicate = (data: Element, filter: string) => {
//       //   return data.name == filter;
//       //  };
      
//       // observableFromEvent(this.filter.nativeElement, 'scroll').pipe(
//       //   debounceTime(150),
//       //   distinctUntilChanged())
//       //   .subscribe(() => {
//       //     if (!this.dataSource) { return; }
//       //      this.dataSource.filter = this.filter.nativeElement.value;
//       //    // this.dataSource.filter;
//       //   });

//         // observableFromEvent(this.filter.nativeElement, 'keydown').pipe(
//         //   debounceTime(150),
//         //   distinctUntilChanged())
//         //   .subscribe(() => {
//         //     if (!this.dataSource) { return; }
//         //      this.dataSource.filter = this.filter.nativeElement.value;
//         //    // this.dataSource.filter;
//         //   });

//     }

//     applyFilter(event: Event) {
//       const filterValue = (event.target as HTMLInputElement).value;
//       this.dataSource.filter = filterValue.trim().toLowerCase();
  
//       if (this.dataSource.paginator) {
//         this.dataSource.paginator.firstPage();
//       }
//     }
  

// }

// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }


import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'cdk-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss']
})
export class FilterTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };
}