import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() text: string;
  @Input() klass: string;
  @Input() loading: string;
  @Output() clickedMe = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  btnClicked() {
    this.clickedMe.emit();
  }

}
