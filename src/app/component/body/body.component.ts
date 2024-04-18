import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  products: Product[] = [];

  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.crud.getall().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  delete(name: string | undefined): void {
    if (typeof name === 'string') {
      this.crud.delete(name).subscribe({
        next: () => {
          console.log('Deleted successfully');
          this.getAll();
        },
        error: (err) => {
          console.log('Error:', err);
          this.getAll();
        },
      });
    }
  }
}