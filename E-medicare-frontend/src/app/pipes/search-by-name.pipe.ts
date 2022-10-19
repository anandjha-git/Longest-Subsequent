import { Pipe, PipeTransform } from '@angular/core';
import { medicines } from '../models/medicines.model';
import { MedicineService } from '../services/medicines.service';


@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(Medicines: medicines[], searchText: string){
    if(!Medicines || !searchText){
      return Medicines;
    }
    return Medicines.filter(medicines=>medicines.medicineName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

}
