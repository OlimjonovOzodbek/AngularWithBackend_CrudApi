import { Component } from '@angular/core';
import { createmodel } from '../../../interfaces/createmodel';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent {
  id!: number;
  result!: string;
  crModel: createmodel = {
    name: '',
    price: 1,
    guaranteeDuration: '',
    madeIn: '',
  };
  constructor(private crud: CrudService) {}
  ngOnInit(): void {
    this.update();
  }
  myfunc(id:number,crMd: createmodel) {
    this.crud.update(crMd,id).subscribe({
      next: (data) => {
        this.result = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  update() {
    this.myfunc(this.id,this.crModel);
  }
}
