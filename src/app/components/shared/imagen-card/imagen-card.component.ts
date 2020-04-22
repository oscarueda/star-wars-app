import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-card',
  templateUrl: './imagen-card.component.html',
  styleUrls: ['./imagen-card.component.css']
})
export class ImagenCardComponent implements OnInit {

  @Input() imagen: string;
  @Input() link: string;
  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
