package com.medicare.medicines;

import java.util.List;

public interface MedicineService {
	public Medicines insertMedicines(Medicines medicines);
	void updateMedicines(Medicines medicines);
	void deleteMedicines(int medicineId);
	Medicines findById(int medicineId);
	List<Medicines>getMedicineDetails();

}
