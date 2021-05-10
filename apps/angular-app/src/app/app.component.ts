import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import { assetUrl } from '../single-spa/asset-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(iconService: NzIconService) {
    iconService.changeAssetsSource(assetUrl('../'));
  }
}
