import { Component, OnInit } from '@angular/core';
import { medicines } from '../models/medicines.model';
import { MedicineService } from '../services/medicines.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  medicines:medicines[] |undefined;
  constructor(private medicineService:MedicineService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.medicineService.getMedicines().subscribe((med)=>{
      this.medicines = med;;
    });
  }

  deleteM(medicineId:number){
    this.medicineService.deleteM(medicineId).subscribe();
    return location.reload();
  }
}