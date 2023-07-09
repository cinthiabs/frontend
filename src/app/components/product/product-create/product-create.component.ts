
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{

  product:Product = {
    id: 0,
    name:'',
    price: 0

  }
  constructor(private productService: ProductService ,private router: Router){}
 /* constructor(private router:Router){}

  navigateToProductCreate():void{
    this.router.navigate(['/products/create'])
  }*/

  ngOnInit():void{
  }
  createProduct():void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Operação executada com sucesso')
      this.router.navigate(['/products'])
    })
    
  }
  cancel():void{
    this.router.navigate(['/products'])
  }
}
