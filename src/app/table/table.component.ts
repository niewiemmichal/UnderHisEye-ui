import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, PageEvent, Sort, MatRow } from '@angular/material';

export interface ColumnInfoItem {
    columnDef: string;
    header: string;
    cell: (element: any) => string;
}

export interface SelectedOption {
    optionName: string;
    row: Object;
}

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})
export class TableComponent {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    private _sortedData: Object[] = [];
    private _data: Object[] = [];

    @Input()
    set data(data: Object[]) {
        this._sortedData = data;
        this._data = data;
    }
    get data(): Object[] {
        return this._data;
    }
    @Input() columnsInfo: ColumnInfoItem[] = [];
    @Input() rowOptions: string[] = [];
    @Input() clickableRows: boolean = true;

    @Output() rowSelected: EventEmitter<Object> = new EventEmitter();
    @Output() optionSelected: EventEmitter<SelectedOption> = new EventEmitter();

    pageSize: number = 10;
    pageIndex: number = 0;
    currentActiveRow: Object = null;

    get displayData(): Object[] {
        return this._sortedData.slice(
            this.pageIndex * this.pageSize,
            (this.pageIndex + 1) * this.pageSize
        );
    }

    get columnDefs(): string[] {
        return this.rowOptions.length > 0
            ? this.columnsInfo.map(c => c.columnDef).concat('options')
            : this.columnsInfo.map(c => c.columnDef);
    }

    changePage(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
    }

    sortData(sort: Sort): void {
        const data = this._data.slice();

        if (!sort.active || sort.direction === '') {
            this._sortedData = data;
        } else {
            this._sortedData = data.sort((a: any, b: any) => {
                const isAsc = sort.direction === 'asc';
                const column = this.columnsInfo.find(c => c.columnDef === sort.active);
                return (column.cell(a) < column.cell(b) ? -1 : 1) * (isAsc ? 1 : -1);
            });
        }
    }

    rowClick(event: MouseEvent, row: Object, i: any): void {
        if (row === this.currentActiveRow) {
            this.currentActiveRow = null;
        } else {
            this.currentActiveRow = row;
        }
        this.rowSelected.emit(this.currentActiveRow);
    }

    optionClick(option: string, row: Object): void {
        this.optionSelected.emit({ optionName: option.toLowerCase(), row: row });
    }
}
