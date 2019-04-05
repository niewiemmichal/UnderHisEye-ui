import { Component } from '@angular/core';
import { ColumnInfoItem } from 'src/app/table/table.component';
import { MatSelectChange } from '@angular/material';
import { FormControl } from '@angular/forms';

class Term {
  time: string;
  date: string;
}

class Doctor {
  id: number;
  name: string;
  surname: string;
  terms: Term[];
}

@Component({
  selector: 'app-term-selection',
  templateUrl: './term-selection.component.html',
  styleUrls: ['./term-selection.component.scss']
})
export class TermSelectionComponent {

  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Aleksander',
      surname: 'Nauka',
      terms: [
        {
          "date": "2016-06-28",
          "time": "09:54:32"
        },
        {
          "date": "2014-04-25",
          "time": "08:28:24"
        },
        {
          "date": "2016-09-21",
          "time": "05:57:55"
        },
        {
          "date": "2016-01-23",
          "time": "08:29:06"
        },
        {
          "date": "2014-08-02",
          "time": "12:10:51"
        },
        {
          "date": "2016-12-30",
          "time": "06:50:46"
        },
        {
          "date": "2014-10-03",
          "time": "10:34:13"
        },
        {
          "date": "2017-07-22",
          "time": "08:12:30"
        },
        {
          "date": "2015-03-21",
          "time": "10:59:05"
        },
        {
          "date": "2016-12-03",
          "time": "11:05:09"
        },
        {
          "date": "2015-12-10",
          "time": "07:30:11"
        },
        {
          "date": "2015-05-18",
          "time": "06:47:20"
        },
        {
          "date": "2015-08-03",
          "time": "11:59:28"
        },
        {
          "date": "2014-03-26",
          "time": "09:27:30"
        },
        {
          "date": "2018-08-15",
          "time": "02:51:16"
        },
        {
          "date": "2018-02-08",
          "time": "11:22:52"
        },
        {
          "date": "2016-12-20",
          "time": "03:07:50"
        },
        {
          "date": "2014-04-05",
          "time": "05:29:38"
        },
        {
          "date": "2014-07-09",
          "time": "08:28:42"
        },
        {
          "date": "2016-04-22",
          "time": "09:11:56"
        },
        {
          "date": "2017-12-05",
          "time": "09:21:07"
        }
      ]
    },
    {
      id: 2,
      name: 'Michał',
      surname: 'Padula',
      terms: [
        {
          "date": "2017-02-11",
          "time": "12:01:25"
        },
        {
          "date": "2019-01-31",
          "time": "09:16:25"
        },
        {
          "date": "2015-10-16",
          "time": "03:23:47"
        },
        {
          "date": "2017-03-21",
          "time": "12:57:18"
        },
        {
          "date": "2017-12-16",
          "time": "09:59:53"
        },
        {
          "date": "2018-10-04",
          "time": "05:58:15"
        },
        {
          "date": "2014-03-14",
          "time": "09:03:22"
        },
        {
          "date": "2015-01-15",
          "time": "12:13:17"
        },
        {
          "date": "2017-09-14",
          "time": "03:17:10"
        },
        {
          "date": "2016-08-19",
          "time": "09:03:48"
        },
        {
          "date": "2015-04-30",
          "time": "12:28:16"
        },
        {
          "date": "2017-09-16",
          "time": "01:40:08"
        },
        {
          "date": "2016-02-08",
          "time": "09:26:10"
        },
        {
          "date": "2017-11-29",
          "time": "08:35:27"
        },
        {
          "date": "2016-08-06",
          "time": "06:21:43"
        },
        {
          "date": "2016-11-13",
          "time": "01:07:50"
        },
        {
          "date": "2014-01-15",
          "time": "04:44:41"
        },
        {
          "date": "2016-01-08",
          "time": "04:05:23"
        },
        {
          "date": "2018-01-10",
          "time": "10:02:50"
        }
      ]
    },
    {
      id: 3,
      name: 'Paweł',
      surname: 'Jur',
      terms: [
        {
          "date": "2014-05-18",
          "time": "01:51:10"
        },
        {
          "date": "2016-09-28",
          "time": "12:58:41"
        },
        {
          "date": "2018-03-19",
          "time": "08:31:03"
        },
        {
          "date": "2016-06-13",
          "time": "06:23:26"
        },
        {
          "date": "2018-08-10",
          "time": "12:13:06"
        },
        {
          "date": "2018-11-26",
          "time": "05:00:44"
        },
        {
          "date": "2017-11-19",
          "time": "10:21:27"
        },
        {
          "date": "2014-05-08",
          "time": "02:25:27"
        },
        {
          "date": "2019-03-27",
          "time": "09:53:52"
        },
        {
          "date": "2018-11-03",
          "time": "05:11:59"
        },
        {
          "date": "2015-01-21",
          "time": "06:16:52"
        },
        {
          "date": "2016-02-10",
          "time": "08:07:37"
        },
        {
          "date": "2014-02-12",
          "time": "09:00:51"
        },
        {
          "date": "2017-08-17",
          "time": "11:44:30"
        },
        {
          "date": "2018-12-28",
          "time": "07:10:05"
        },
        {
          "date": "2015-08-20",
          "time": "03:10:24"
        },
        {
          "date": "2018-03-20",
          "time": "07:58:03"
        },
        {
          "date": "2016-08-16",
          "time": "06:03:51"
        },
        {
          "date": "2016-10-02",
          "time": "06:06:10"
        },
        {
          "date": "2018-09-28",
          "time": "09:47:50"
        },
        {
          "date": "2018-01-04",
          "time": "02:33:47"
        },
        {
          "date": "2016-09-22",
          "time": "07:25:28"
        },
        {
          "date": "2018-03-02",
          "time": "04:56:28"
        },
        {
          "date": "2015-12-22",
          "time": "06:39:53"
        },
        {
          "date": "2018-11-06",
          "time": "09:38:35"
        },
        {
          "date": "2017-06-26",
          "time": "03:24:14"
        },
        {
          "date": "2016-07-02",
          "time": "03:06:26"
        },
        {
          "date": "2015-06-02",
          "time": "05:08:18"
        },
        {
          "date": "2015-11-26",
          "time": "03:46:36"
        },
        {
          "date": "2014-08-05",
          "time": "06:57:55"
        },
        {
          "date": "2017-06-29",
          "time": "08:03:39"
        },
        {
          "date": "2014-02-13",
          "time": "11:44:54"
        },
        {
          "date": "2017-02-15",
          "time": "12:26:41"
        },
        {
          "date": "2015-01-16",
          "time": "06:19:59"
        },
        {
          "date": "2015-05-17",
          "time": "09:48:42"
        }
      ]
    }
  ];

  termsToDisplay: Term[] = [];
  date: FormControl = new FormControl(new Date());

  columns: ColumnInfoItem[] = [
    { columnDef: 'date',      header: 'Date',     cell: (element: any) => `${element.date}` },
    { columnDef: 'time',      header: 'Time',     cell: (element: any) => `${element.time}`},
  ];

  selectionChanged(event: MatSelectChange): void {
    this.termsToDisplay = event.value.terms.filter(term => 
      this.compareDates(new Date(term.date), this.date.value) >= 0
    );
  }

  compareDates(date1: Date, date2: Date): number {
    const year1: number = date1.getFullYear();
    const month1: number = date1.getMonth();
    const day1: number = date1.getDate();
    const year2: number = date2.getFullYear();
    const month2: number = date2.getMonth();
    const day2: number = date2.getDate();
    let result: number = 0;

    if (year1 > year2) {
      result = 1;
    }
    else if (year1 === year2) {

      if (month1 > month2) {
        result = 1
      }
      else if (month1 === month2) {

        if (day1 > day2) {
          result = 1
        }
        else if (day1 === day2) {
          result = 0
        }
        else {
          result = -1;
        }

      }
      else {
        result = -1;
      }

    }
    else {
      result = -1;
    }

    return result;
  }
}
