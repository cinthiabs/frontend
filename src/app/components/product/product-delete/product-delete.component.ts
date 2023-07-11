import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
product!:Product

constructor(private productService: ProductService, 
  private router: Router,
  private route : ActivatedRoute){}
  deleteProduct():void{
    this.productService.delete(this.product.id.toString()).subscribe(() =>{
      this.productService.showMessage('Produto excluido com Sucesso!');
      this.router.navigate(['/products']);
    })
  }
  cancel():void{
    this.router.navigate(['/products']);
  }
  ngOnInit():void{
    const id = this.route.snapshot.paramMap.get('id')
    if (id != null){
      this.productService.readById(id).subscribe(product =>{
        this.product = product
      })
    }    
  }
}
