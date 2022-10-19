import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmedicineService } from 'src/app/services/addmedicine.service';
import { Addmedicine } from 'src/app/models/addmedicine.model';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit {

  addmedicine : Addmedicine | undefined;
  constructor(private addmedicineservice:AddmedicineService,
    private router: Router,private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.addmedicineservice.addmedicine(form.value.medicineName,form.value.manufactureDate,form.value.type,form.value.price,form.value.description,form.value.expdate,form.value.status,form.value.seller).subscribe((reg)  => {
     this.addmedicine = reg;
      return this.router.navigate(['/adminpage'], { relativeTo: this.route});
    })

}}
