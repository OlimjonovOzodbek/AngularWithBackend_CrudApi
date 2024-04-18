import { CrudService } from '../../services/crud.service';
import { createmodel } from './../../interfaces/createmodel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  result!: string;
  crModel: createmodel = {
    name: '',
    price: 1,
    guaranteeDuration: '',
    madeIn: '',
  };
  constructor(private crud: CrudService) {}
  ngOnInit(): void {
    this.creat();
  }
  myfunc(crMd: createmodel) {
    this.crud.create(crMd).subscribe({
      next: (data) => {
        this.result = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  creat() {
    this.myfunc(this.crModel);
  }
}
