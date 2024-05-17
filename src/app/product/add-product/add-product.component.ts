import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductserviceService } from '../../services/productservice.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  frm:FormGroup;
  flag:boolean=false
  constructor(private fb:FormBuilder,private ps:ProductserviceService,private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.frm = this.fb.group({
      productId:[],
      productName:[],
      productType:[],
      productPrice:[]
    })
   this.getProductToBeEdit()
  }
  onSumbit(){
   if(!this.flag){
    this.ps.saveProduct(this.frm.value).subscribe();
    console.log(this.frm.value)
   }
   else{
    this.ps.updateProduct(this.frm.value).subscribe()
    this.frm.reset()
    alert("data updated sucessfully")
   }
  }
  getProductToBeEdit(){
    93
    
    let id =0;
    this.activatedRoute.paramMap.subscribe(map=>{
      id=parseInt(map.get('id'))
      
    })
    if(id!=0){
      this.ps.getSingleProduct(id).subscribe((res:Product)=>{
        console.log(res)
        this.frm.patchValue(res);
        this.flag = true;
      })
    }
  }

}

