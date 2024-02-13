type Speciality = {
  speciality_en: string;
  speciality_ar: string;
};

type Governorate = {
  id: number;
  governorate_name_en: string;
  governorate_name_ar: string;
};

type City = {
  id: number;
  governorate_id: number;
  city_name_en: string;
  city_name_ar: string;
};
