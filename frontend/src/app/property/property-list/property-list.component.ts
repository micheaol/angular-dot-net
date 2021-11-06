import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Bird House",
      "Type": "House",
      "Price": 20000
    },
    {
      "Id": 2,
      "Name": "Dog House",
      "Type": "House",
      "Price": 20000
    },
    {
      "Id": 3,
      "Name": "Goat House",
      "Type": "House",
      "Price": 20000
    },
    {
      "Id": 4,
      "Name": "Fish House",
      "Type": "House",
      "Price": 20000
    },
    {
      "Id": 5,
      "Name": "Cat House",
      "Type": "House",
      "Price": 20000
    },
]

  constructor() { }

  ngOnInit(): void {
  }

}
