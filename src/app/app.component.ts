import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonsComponent } from "./components/mat-buttons/mat-buttons.component";
import { MatChipsComponent } from "./components/mat-chips/mat-chips.component";
import { MatTable } from '@angular/material/table';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatFormfieldComponent } from './components/mat-formfield/mat-formfield.component';
import { MatElevationComponent } from './components/mat-elevation/mat-elevation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule, MatButtonsComponent, MatChipsComponent, MatTableComponent, MatFormfieldComponent, MatElevationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mat-theme-app';
}
