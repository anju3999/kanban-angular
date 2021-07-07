import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BoardModel} from '../../models/board.model';
import {ColumnModel} from '../../models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }
  board: BoardModel = new BoardModel('Test Board',[
    new ColumnModel('Ideas', [
      'some random idea',
      'this is something',
      'i will not procrastinate'
    ]),
    new ColumnModel('Research', [
      'this is something random idea',
      ' something',
      'i will procrastinate'
    ]),
    new ColumnModel('ToDo', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ]),
    new ColumnModel('Done', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ])
  ]);
  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
