import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import { FormGroup, FormControl, Validators } from "@angular/forms";

export interface EditUserDto {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  project: string;
  team: string;
}

export interface EditUser {
  currentData?: EditUserDto;
  originalData: EditUserDto;
  editable: boolean;
  validator: FormGroup;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html"
})
export class TableBasicExample {
  ELEMENT_DATA_FROM_BACK: EditUserDto[] = [{},{}];

  ELEMENT_DATA: EditUser[] = [];

  displayedColumns: string[] = ["Schuljahr", "Semester", "Fach", "Note"];
  dataSource: MatTableDataSource<EditUser>;
  selected = "option1";

  constructor() {
    this.ELEMENT_DATA_FROM_BACK.forEach(element => {
      this.ELEMENT_DATA.push({});
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA.slice());
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteRow(index: number) {
    const data = this.dataSource.data;
    this.dataSource.data = data;
  }

  confirmEditCreate(row) {
    row.editable = false;
    // save form control values to data object
    Object.keys(row.validator.controls).forEach(item => {
      row.currentData[item] = row.validator.controls[item].value;
    });
  }

  activateEdit(row) {
    this.ELEMENT_DATA.push()
    console.log(this.ELEMENT_DATA)
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
