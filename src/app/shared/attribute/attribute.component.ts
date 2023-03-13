import { Component, Input } from "@angular/core";

@Component({
  selector: 'attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent {
  @Input() typeText: string = '';
  @Input() valueText: string = '';
  constructor() {}
}
