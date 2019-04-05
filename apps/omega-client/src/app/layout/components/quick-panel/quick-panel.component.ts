import { Component, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@omega/core';
import { MatRadioChange } from '@angular/material';
import { fuseConfig } from '../../../fuse-config/fuse-config';

@Component({
  // tslint:disable-next-line:component-selector
    selector     : 'quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent
{
    date: Date;
    events: any[];
    notes: any[];
    settings: any;
    layoutStyle: any;

    /**
     * Constructor
     */
    constructor(
      private configService: FuseConfigService
    )
    {
        // Set the defaults
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud : false,
            retro : true
        };


    }

  layoutStyleChange($event: MatRadioChange) {

      const config = this.configService.config;
      this.configService.setConfig({
        ...fuseConfig,
        layout: {
          ...fuseConfig.layout,
          style: $event.value,
          navbar: {
            ...fuseConfig.layout.navbar,
            position: $event.value.includes('vertical') ? 'left' : 'top',
            variant: $event.value.includes('vertical') ? 'vertical-style-2' : 'horizontal-style-1'
          },
          toolbar: {
            ...fuseConfig.layout.toolbar,
            position: $event.value.includes('vertical') ? 'below-static' : 'above'
          }
        }
      }, {emitEvent: true});
  }
}
