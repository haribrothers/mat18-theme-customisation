import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mat-buttons',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './mat-buttons.component.html',
  styleUrl: './mat-buttons.component.scss'
})
export class MatButtonsComponent {

}
