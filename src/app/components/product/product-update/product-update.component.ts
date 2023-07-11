import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent  implements OnInit{
  products:Product = {
    id: 0,
    name:'',
    price: 0

  }

  constructor(
    private productService:ProductService,
    private router: Router,
    private route:ActivatedRoute){
      
    }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id !=null){
      this.productService.readById(id).subscribe(product =>{
        this.products = product
      });
    }
   
  }
  
  updateProduct():void{
    console.log(this.products);
    this.productService.update(this.products).subscribe(() =>{
      this.productService.showMessage('Produto atualizado com sucesso!',true)
      this.router.navigate(['/products']);
    })

  }
  cancel():void{
    this.router.navigate(['/products']);
  }
}
