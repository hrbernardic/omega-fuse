import { Component, OnInit } from '@angular/core';
import { FuseProgressBarService } from '../../../../../../libs/core/src/lib/fuse/components/progress-bar/progress-bar.service';

@Component({
  selector: 'omega-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private progressBarService: FuseProgressBarService
  ) { }

  ngOnInit() {
  }

  progBarOn() {
    this.progressBarService.show();
  }

  progBarOff() {
    this.progressBarService.hide();
  }
}
