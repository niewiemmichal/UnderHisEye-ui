import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() data: Object[] = [ new Object()];
  // @Input() columnsDisplayed: string[];

  columns = [
    { columnDef: 'Lol',       header: 'Lol',      cell: (element: any) => `${element.id}` },
    { columnDef: 'Name',      header: 'Name',     cell: (element: any) => `${element.name}`     },
    { columnDef: 'Surname',   header: 'Surname',  cell: (element: any) => `${element.surname}`   },
    { columnDef: 'Visit',     header: 'Visit',    cell: (element: any) => `${element.visit}`   },
  ];

  columnNames = this.columns.map(c => c.header);
}
