import { Component, OnInit } from '@angular/core';
import { differenceInDays, format } from 'date-fns';

@Component({
  selector: 'app-fns-fecha',
  standalone: true,
  imports: [],
  templateUrl: './fns-fecha.component.html',
  styleUrl: './fns-fecha.component.css'
})
export class FnsFechaComponent implements OnInit {
  currentDate: string | undefined;
  daysDifference: number | undefined;

  ngOnInit(): void {
    const now = new Date();
    const targetDate = new Date(1991, 4, 19); // 19 de abril de 1991

    this.currentDate = format(now, 'yyyy-MM-dd');
    this.daysDifference = differenceInDays(now, targetDate);
  }

}
