import { Component, OnInit } from '@angular/core';
import { medicines } from '../../models/medicines.model';
import { Router,ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/services/medicines.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrls: ['./updatemedicine.component.css']
})
export class UpdatemedicineComponent implements OnInit {
  Medicine! : medicines;
  router: any;

  constructor(private activatedRoute: ActivatedRoute, private medicineService : MedicineService,private route:Router) {}

  ngOnInit(): void {
    const medicineId:number = this.activatedRoute.snapshot.params['medicineId'];
    this.medicineService.getMedicine(medicineId).subscribe((res)=>{this.Medicine=res})
  }
  onSubmit(form: NgForm){
    this.medicineService.updateM(form.value.medicineId,form.value.medicineName,form.value.manufacturedDate,form.value.type,form.value.price,form.value.description,form.value.expdate,form.value.status,form.value.seller).subscribe((reg)=>{
     this.Medicine = reg;
      return this.route.navigate(['/adminpage'], { relativeTo: this.activatedRoute});
    })

}}
