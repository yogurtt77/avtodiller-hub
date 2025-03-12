
export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  image: string;
  condition: string;
}

export const cars: Car[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: "15 000 000 ₸",
    mileage: "25 000 км",
    image: "https://avatars.mds.yandex.net/i?id=41408fb2b9eecc9ceabfc382248aea44_l-4593014-images-thumbs&n=13",
    condition: "Отличное",
  },
  {
    id: 2,
    make: "Hyundai",
    model: "Sonata",
    year: 2021,
    price: "12 500 000 ₸",
    mileage: "35 000 км",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Отличное",
  },
  {
    id: 3,
    make: "Kia",
    model: "K5",
    year: 2022,
    price: "13 800 000 ₸",
    mileage: "20 000 км",
    image: "https://avatars.mds.yandex.net/i?id=4ae163e6d7d97b8edc2bd17493180045_l-5427097-images-thumbs&n=13",
    condition: "Отличное",
  },
  {
    id: 4,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2020,
    price: "22 500 000 ₸",
    mileage: "40 000 км",
    image: "https://avatars.mds.yandex.net/get-autoru-vos/1923109/deabd317fb322c00867597fa031a8dc6/1200x900",
    condition: "Хорошее",
  },
  {
    id: 5,
    make: "BMW",
    model: "5 Series",
    year: 2021,
    price: "24 000 000 ₸",
    mileage: "30 000 км",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Отличное",
  },
  {
    id: 6,
    make: "Audi",
    model: "A6",
    year: 2020,
    price: "21 000 000 ₸",
    mileage: "45 000 км",
    image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    condition: "Хорошее",
  },
];
