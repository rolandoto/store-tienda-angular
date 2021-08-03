import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benner',
  templateUrl: './benner.component.html',
  styleUrls: ['./benner.component.scss']
})
export class BennerComponent implements OnInit {


  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
