import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  todoList = [
    {
      itemName: 'coding',
      itemDueDate: '12-21-23',
      itemPriority: 'high',
      itemCategory: 'work'
    },
    {
      itemName: 'Design',
      itemDueDate: '06-02-23',
      itemPriority: 'low',
      itemCategory: 'work'
    },
    {
      itemName: 'developer',
      itemDueDate: '06-02-23',
      itemPriority: 'middle',
      itemCategory: 'personal'
    },
    {
      itemName: 'WorkOut',
      itemDueDate: '08-02-23',
      itemPriority: 'high',
      itemCategory: 'personal'
    },
    {
      itemName: 'coding',
      itemDueDate: '12-21-23',
      itemPriority: 'high',
      itemCategory: 'work'
    },
    {
      itemName: 'Design',
      itemDueDate: '06-02-23',
      itemPriority: 'low',
      itemCategory: 'work'
    },
    {
      itemName: 'developer',
      itemDueDate: '06-02-23',
      itemPriority: 'middle',
      itemCategory: 'personal'
    },
    {
      itemName: 'WorkOut',
      itemDueDate: '08-02-23',
      itemPriority: 'high',
      itemCategory: 'personal'
    }
  ]

  today: number = Date.now();
  time: number = Date.now();

  constructor() {}

  ngOnInit(): void {
    let myIcon = document.getElementById('icon');

    this.todoList.forEach(element => {
      if(element.itemPriority == 'high' && myIcon) {
        myIcon.style.backgroundColor = 'red';
        console.log(`TestCheck from ${this.Mbuelo}`)
      }     
    });
  }

  handleColor(event: any){
    let myIcon = document.getElementById('icon');
    let icon = document.getElementById('icon');

    if(myIcon){
      myIcon.style.backgroundColor = 'red';
      icon?.classList.toggle('dangerMode');
      // event.innerHTML.background = 'red';
      console.log(`hii I am Mbuelo`)
    }
  }

  Mbuelo: string = 'Mbuelo';

}
