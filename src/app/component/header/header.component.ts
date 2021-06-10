import { Component, OnInit } from '@angular/core';
import {UiService} from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'AngularToDo';
  

  constructor() { }

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');

  }
}
