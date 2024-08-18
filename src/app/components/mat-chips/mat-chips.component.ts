import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-mat-chips',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './mat-chips.component.html',
  styleUrl: './mat-chips.component.scss'
})
export class MatChipsComponent {

}
