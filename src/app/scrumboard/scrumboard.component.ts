
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ToolbarHelpers } from '../core/toolbar/toolbar.helpers';
import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.scss']
})

export class ScrumboardComponent {
  tasks: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali',
    'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis',
    'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
  developers: Array<string> = [];
  testers: Array<string> = [];
  
  @Input() toolbarHelpers = ToolbarHelpers;
  notifications = ToolbarHelpers.notifications;
  
  drop(event: CdkDragDrop<{name:string}[]>) {
    this.notify();
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    
  }
  notify() {
       
    this.notifications.push({id:"id", title:"Task Assigned", lastTime: "23min ago", state:"3"});  
  
}
}
