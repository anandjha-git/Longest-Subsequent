package com.medicare.medicines;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MedicineRepository extends JpaRepository<Medicines, Integer> {

	/*static Medicines getMedicine(int medicineId) {
		// TODO Auto-generated method stub
		return null;
	}*/
	Medicines findByMedicineId(int MedicineId);


}
