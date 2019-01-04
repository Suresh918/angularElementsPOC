import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  @Input()
  count: number;
  @Input()
  backgroundColor: string;
  @Input()
  fontColor: string;

  constructor() {
  }

}
