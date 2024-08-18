import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-elevation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mat-elevation.component.html',
  styleUrl: './mat-elevation.component.scss'
})
export class MatElevationComponent {
  eleItems = Array(25);

}
