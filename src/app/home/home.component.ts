import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../arrays.service';
import { Person } from '../person.model';
import { ValitudService } from '../valitud/valitud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  humans = [];
  human;
  
  constructor(private arraysService: ArraysService,
    private valitudService: ValitudService) { }

  ngOnInit(): void {
    this.humans = this.arraysService.getAll();
  }

  onChoose(human: any) {
  this.valitudService.addHuman(human);
  }

  onRemoveAll(): void {
    this.arraysService.removeAll();
    this.humans = this.arraysService.getAll();
  }

  onRemoveOne(i: number): void {
    this.arraysService.removeOne(i);
    this.humans = this.arraysService.getAll();
  }

  onAddOne(human: Person): void {
    this.arraysService.addOne(human);
    this.humans = this.arraysService.getAll();  
  }

  onGetOne(i: number): Person {
    return this.human = this.arraysService.getOne(i);
  }

  onGetAll(): Person[] {
    return this.humans = this.arraysService.getAll();
  }

}
