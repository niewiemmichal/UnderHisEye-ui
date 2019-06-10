import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, PageEvent, Sort } from '@angular/material';

export class ColumnInfoItem {
    columnDef: string;
    header: string;
    cell: (element: any) => string;
}

export class SelectedOption {
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

    private _data: Object[] = [];
    private _sortType: Sort;

    @Input()
    set data(data: Object[]) {
        this._data = data;
    }
    get data(): Object[] {
        return this._data;
    }
    @Input() columnsInfo: ColumnInfoItem[] = [];
    @Input() rowOptions: string[] = [];
    @Input() clickableRows: boolean = false;

    @Output() rowSelected: EventEmitter<Object> = new EventEmitter();
    @Output() optionSelected: EventEmitter<SelectedOption> = new EventEmitter();

    pageSize: number = 10;
    pageIndex: number = 0;
    currentActiveRow: Object = null;

    get displayData(): Object[] {
        let dataToDisplay = this.paginate(this._data, this.pageIndex, this.pageSize);
        return this.sortData(dataToDisplay, this._sortType);
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

    setSortType(sort: Sort): void {
        this._sortType = sort;
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

    private sortData(data: any[], sort: Sort): any[] {
        if (sort != null && sort.active && sort.direction !== '') {
            data.sort((a: any, b: any) => {
                const isAsc = sort.direction === 'asc';
                const column = this.columnsInfo.find(c => c.columnDef === sort.active);
                return (column.cell(a) < column.cell(b) ? -1 : 1) * (isAsc ? 1 : -1);
            });
        }
        return data;
    }

    private paginate(data: any[], pageIndex: number, pageSize: number): any[] {
        return data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
    }
}
