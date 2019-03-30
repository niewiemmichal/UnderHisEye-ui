import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';

export interface ColumnInfoItem {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() data: Object[];
  @Input() columnsDisplayed: ColumnInfoItem[];

  pageSize: number = 10;
  pageIndex: number = 0;

  get displayData(): Object[] {
    return this.data.slice(
      this.pageIndex * this.pageSize,
      (this.pageIndex + 1) * this.pageSize
    );
  }

  get columnNames(): string[] {
    return this.columnsDisplayed.map(c => c.header);
  }

  ngOnInit(): void {
  }

  changePage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}
