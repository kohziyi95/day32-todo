import { TodoComponent } from './components/todo.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'day33';

  @ViewChild('todo')
  todoComp!: TodoComponent;

  saveTodo(){
    const data = this.todoComp.getValues();
    console.info("saved >>>>>>>> ", data)
  }

  ngAfterViewInit(): void {
    console.info("afterViewInit >>>>>>>>> ", this.todoComp)
  }

  ngOnInit(): void {

  }
}
