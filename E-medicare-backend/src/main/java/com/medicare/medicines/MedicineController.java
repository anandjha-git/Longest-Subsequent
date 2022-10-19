package com.medicare.medicines;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v2")
public class MedicineController {
	private MedicineService medicineService;

	public MedicineController(MedicineService medicineService) {
		super();
		this.medicineService = medicineService;
	}

//add new medicine
	@PostMapping("/medicines")
	public ResponseEntity<Object> insert(@RequestBody Medicines medicines) {
		try {
			Medicines res = medicineService.insertMedicines(medicines);

			if (res != null) {
				return new ResponseEntity<Object>(res, HttpStatus.CREATED);
			} else {
				return new ResponseEntity<Object>("There is some issue, please try again later.",
						HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<Object>(
					"Facing some issue while trying to add this medicine, please try with different name.",
					HttpStatus.BAD_REQUEST);
		}
	}

//get all medicine
	@GetMapping("/medicines")
	public ResponseEntity<Object> getMedicineDetails() {
		try {
			List<Medicines> res = medicineService.getMedicineDetails();

			if (res != null) {
				return new ResponseEntity<Object>(res, HttpStatus.CREATED);
			} else {
				return new ResponseEntity<Object>("Sorry !!! No medicine is available.", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<Object>(
					"Facing some issue while trying to fetch medicines, please try after some time.",
					HttpStatus.BAD_REQUEST);
		}
	}

//get medicine by id
	@GetMapping("/medicines/{medicineId}")
	public Medicines getMedicineById(@PathVariable("medicineId") int medicineId) {

		Medicines M = medicineService.findById(medicineId);
		return M;
	}

//delete medicine by id
	@DeleteMapping("/medicines/{medicineId}")
	public ResponseEntity<Object> deleteMedicine(@PathVariable("medicineId") int medicineId) {
		try {
			Medicines M = medicineService.findById(medicineId);
			if (M != null) {
				medicineService.deleteMedicines(medicineId);
				return new ResponseEntity<>("deleted successsfully", HttpStatus.ACCEPTED);
			} else {
				return new ResponseEntity<Object>("Incorrect medicine id.", HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return new ResponseEntity<Object>(
					"Facing some issue while trying to fetch medicines, please try after some time.",
					HttpStatus.BAD_REQUEST);
		}
	}

//update medicine
	@PutMapping("/medicines")
	public Medicines update(@RequestBody Medicines medicine) {
		medicineService.updateMedicines(medicine);
		return medicine;
	}
	
//	*********************************************************************************************************************************
	//@PostMapping("/medicines")
	//public Medicines insert(@RequestBody Medicines medicines)
	//{
//		medicineService.insertMedicines(medicines);
//		return medicines;
	//}

	
	//@GetMapping("/medicines")
	//public List<Medicines> getMedicineDetails() 
	//{
//		List<Medicines> medicines = medicineService.getMedicineDetails();
//		return medicines;
	//}
	
/*	@PutMapping("/medicine")
    public ResponseEntity<Object> updateMedicine(@RequestParam("medicineId") int medicineId,@RequestBody Medicines updatedMedicine) {
        try {
            Medicines existingMedicineObject = medicineService.findById(medicineId);

            if(existingMedicineObject != null) {
                if(updatedMedicine.getMedicineName() != null) {
                    existingMedicineObject.setMedicineName(updatedMedicine.getMedicineName());
                }
                if(updatedMedicine.getManufactureDate() != null) {
                    existingMedicineObject.setManufactureDate(updatedMedicine.getManufactureDate());
                }
                if(updatedMedicine.getType() != null) {
                    existingMedicineObject.setType(updatedMedicine.getType());
                }
                if(updatedMedicine.getPrice() > 0) {
                    existingMedicineObject.setPrice(updatedMedicine.getPrice());
                }
                if(updatedMedicine.getDescription() != null) {
                    existingMedicineObject.setDescription(updatedMedicine.getDescription());
                }
                if(updatedMedicine.getExpdate() != null) {
                    existingMedicineObject.setExpdate(updatedMedicine.getExpdate());
                }
                if(updatedMedicine.getStatus() != null) {
                    existingMedicineObject.setStatus(updatedMedicine.getStatus());
                }
                if(updatedMedicine.getSeller() != null) {
                    existingMedicineObject.setSeller(updatedMedicine.getSeller());
                }
                
                return new ResponseEntity<Object>("Successfully Updated",HttpStatus.CREATED);
            }
            else {
                return new ResponseEntity<Object>("Incorrect medicine Id.", HttpStatus.BAD_REQUEST);
            }
        }
        catch (Exception e) {
            return new ResponseEntity<Object>("Facing some issue while trying to update medicine details, please try with different medicine name or try after some time.", HttpStatus.BAD_REQUEST);
        }
    }
   */
}
