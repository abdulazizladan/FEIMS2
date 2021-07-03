import { Component, OnInit } from '@angular/core';
import { egretAnimations } from '../../../shared/animations/egret-animations';
import { ThemeService } from '../../../shared/services/theme.service';
import * as tinyColor from 'tinycolor2';

@Component({
  selector: 'app-building-summary',
  templateUrl: './building-summary.component.html',
  styleUrls: ['./building-summary.component.scss'],
  animations: egretAnimations
})
export class BuildingSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
