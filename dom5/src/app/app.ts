import { Component, signal,Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vozac } from './vozac/vozac';
import { NgFor } from '@angular/common';
import { DRIVERS } from '../db-data';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Vozac,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MotoGp');
  Vozaci = DRIVERS;
}
