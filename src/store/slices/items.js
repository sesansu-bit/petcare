import {createSlice} from "@reduxjs/toolkit";
const itemsSlice=createSlice({
    name:"items",
    initialState: [
        
    {
    "id": "1",
    "image": "/cloth0.jpeg",
    "company": "PawLuxe",
    "item_name": "Printed Cotton Dog Tee",
    "original_price": 1045,
    "current_price": 606,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "10 Oct 2024",
    "rating": {
      "stars": 4.5,
      "count": "27k"
    }
  },
  {
    "id": "2",
    "image": "/cloth1.webp",
    "company": "CozyPaws",
    "item_name": "Polo Collar Pet Shirt",
    "original_price": 1045,
    "current_price": 606,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "11 Dec 2024",
    "rating": {
      "stars": 4.5,
      "count": "57k"
    }
  },
  {
    "id": "3",
    "image": "/cloth2.png",
    "company": "Bulldog Wear",
    "item_name": "Printed Oversized Pet Tee",
    "original_price": 2599,
    "current_price": 1507,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "16 Dec 2024",
    "rating": {
      "stars": 4.1,
      "count": "28k"
    }
  },
  {
    "id": "4",
    "image": "/cloth3.webp",
    "company": "PoloPup",
    "item_name": "Logo Lounge Pet Tee",
    "original_price": 1599,
    "current_price": 495,
    "discount_percentage": "69%",
    "return_period": 14,
    "delivery_date": "19 Dec 2024",
    "rating": {
      "stars": 4.8,
      "count": "49k"
    }
  },
  {
    "id": "5",
    "image": "/cloth4.jpeg",
    "company": "FurWarm",
    "item_name": "Thermoregulating Pet Tee",
    "original_price": 999,
    "current_price": 999,
    "discount_percentage": "80%",
    "return_period": 14,
    "delivery_date": "21 Dec 2024",
    "rating": {
      "stars": 5.0,
      "count": "10k"
    }
  },
  {
    "id": "6",
    "image": "/cloth5.jpeg",
    "company": "Pawster",
    "item_name": "Pure Cotton Pet Tee",
    "original_price": 1399,
    "current_price": 489,
    "discount_percentage": "65%",
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": {
      "stars": 4.2,
      "count": "3500"
    }
  },
  {
    "id": "7",
    "image": "/cloth6.jpeg",
    "company": "Pawster",
    "item_name": "Henley Neck Pet Tee",
    "original_price": 899,
    "current_price": 359,
    "discount_percentage": "60%",
    "return_period": 14,
    "delivery_date": "12 Oct 2023",
    "rating": {
      "stars": 4.3,
      "count": "18k"
    }
  },
  {
    "id": "8",
    "image": "/cloth7.jpeg",
    "company": "HighTail",
    "item_name": "Colourblocked Round Neck Pet Tee",
    "original_price": 1299,
    "current_price": 520,
    "discount_percentage": "60%",
    "return_period": 14,
    "delivery_date": "14 Oct 2023",
    "rating": {
      "stars": 4.4,
      "count": "12k"
    }
  },
  {
    "id": "9",
    "image": "/cloth8.png",
    "company": "KottyPaw",
    "item_name": "Basic Round Neck Pet Tee",
    "original_price": 899,
    "current_price": 299,
    "discount_percentage": "67%",
    "return_period": 14,
    "delivery_date": "15 Oct 2023",
    "rating": {
      "stars": 4.0,
      "count": "9k"
    }
  },
  {
    "id": "10",
    "image": "/cloth9.jpeg",
    "company": "Pawster",
    "item_name": "Rust Slim Fit Pet Tee",
    "original_price": 999,
    "current_price": 299,
    "discount_percentage": "70%",
    "return_period": 14,
    "delivery_date": "16 Oct 2023",
    "rating": {
      "stars": 4.5,
      "count": "14k"
    }
  },
  {
    "id": "11",
    "image": "/cloth10.jpeg",
    "company": "Pawster",
    "item_name": "Graphic Print Pet Tee",
    "original_price": 1399,
    "current_price": 479,
    "discount_percentage": "65%",
    "return_period": 14,
    "delivery_date": "17 Oct 2023",
    "rating": {
      "stars": 4.2,
      "count": "6k"
    }
  },
  {
    "id": "12",
    "image": "/cloth11.jpeg",
    "company": "Campus Pawtra",
    "item_name": "Full Sleeve Solid Pet Tee",
    "original_price": 1499,
    "current_price": 749,
    "discount_percentage": "50%",
    "return_period": 14,
    "delivery_date": "18 Oct 2023",
    "rating": {
      "stars": 4.6,
      "count": "22k"
    }
  },
  {
    "id": "13",
    "image": "/cloth12.jpeg",
    "company": "Campus Pawtra",
    "item_name": "Mandarin Collar Pet Tee",
    "original_price": 1099,
    "current_price": 549,
    "discount_percentage": "50%",
    "return_period": 14,
    "delivery_date": "19 Oct 2023",
    "rating": {
      "stars": 4.4,
      "count": "8k"
    }
  },
  {
    "id": "14",
    "image": "/cloth13.jpeg",
    "company": "Pawster",
    "item_name": "Graphic Casual Pet Tee",
    "original_price": 899,
    "current_price": 359,
    "discount_percentage": "60%",
    "return_period": 14,
    "delivery_date": "20 Oct 2023",
    "rating": {
      "stars": 4.1,
      "count": "19k"
    }
  },
  {
    "id": "15",
    "image": "/cloth14.png",
    "company": "HighTail",
    "item_name": "Printed Slim Fit Pet Tee",
    "original_price": 999,
    "current_price": 399,
    "discount_percentage": "60%",
    "return_period": 14,
    "delivery_date": "21 Oct 2023",
    "rating": {
      "stars": 4.0,
      "count": "10k"
    }
  }
   ,
       {
    "id": "31",
    "image": "/petfood14.webp",
    "company": "Pawfect Bites",
    "item_name": "Premium Chicken & Rice Dog Food (0.35 kg)",
    "original_price": 1045,
    "current_price": 606,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "11 dec 2024",
    "rating": {
      "stars": 4.5,
      "count": "57k"
    }
  },
  {
    "id": "32",
    "image": "/petfood2.webp",
    "company": "Barky Feast",
    "item_name": "Grain-Free Lamb & Sweet Potato Kibble",
    "original_price": 2599,
    "current_price": 1507,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "16 dec 2024",
    "rating": {
      "stars": 4.1,
      "count": "28k"
    }
  },
  {
    "id": "33",
    "image": "/petfood3.jpeg",
    "company": "Canine Crave",
    "item_name": "High Protein Beef Meal",
    "original_price": 1599,
    "current_price": 495,
    "discount_percentage": "69%",
    "return_period": 14,
    "delivery_date": "19 dec 2024",
    "rating": {
      "stars": 4.8,
      "count": "49k"
    }
  },
  {
    "id": "34",
    "image": "/petfood4.webp",
    "company": "Happy Paws",
    "item_name": "Salmon & Veggie Dry Dog Food",
    "original_price": 999,
    "current_price": 999,
    "discount_percentage": "80%",
    "return_period": 14,
    "delivery_date": "21 dec 2024",
    "rating": {
      "stars": 5.0,
      "count": "10k"
    }
  },
  {
    "id": "35",
    "image": "/petfood5.webp",
    "company": "TailWaggers",
    "item_name": "Puppy Starter Chicken Formula",
    "original_price": 1399,
    "current_price": 489,
    "discount_percentage": "65%",
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": {
      "stars": 4.2,
      "count": "3500"
    }
  },
  {
    "id": "36",
    "image": "/petfood6.jpeg",
    "company": "Woof & Whiskers",
    "item_name": "Slow-Cooked Turkey Dinner",
    "original_price": 3995,
    "current_price": 2995,
    "discount_percentage": "70%",
    "return_period": 14,
    "delivery_date": "16 dec 2024",
    "rating": {
      "stars": 2.9,
      "count": "34k"
    }
  },
  {
    "id": "37",
    "image": "/petfood7.webp",
    "company": "FurFeast",
    "item_name": "Adult Dog Lamb Recipe",
    "original_price": 795,
    "current_price": 495,
    "discount_percentage": "69%",
    "return_period": 14,
    "delivery_date": "19 dec 2024",
    "rating": {
      "stars": 3.9,
      "count": "43k"
    }
  },
  {
    "id": "38",
    "image": "/petfood8.jpeg",
    "company": "K9 Kitchen",
    "item_name": "Duck & Oats Balanced Meal",
    "original_price": 895,
    "current_price": 495,
    "discount_percentage": "50%",
    "return_period": 14,
    "delivery_date": "17 dec 2024",
    "rating": {
      "stars": 3.4,
      "count": "76k"
    }
  },
  {
    "id": "39",
    "image": "/petfood9.jpeg",
    "company": "BarkBites",
    "item_name": "Chicken Jerky Treats for Dogs",
    "original_price": 1095,
    "current_price": 795,
    "discount_percentage": "30%",
    "return_period": 14,
    "delivery_date": "30 dec 2024",
    "rating": {
      "stars": 4.3,
      "count": "52k"
    }
  },
  {
    "id": "40",
    "image": "/petfood10.webp",
    "company": "Pupper Pantry",
    "item_name": "Grain-Free Salmon Delight",
    "original_price": 695,
    "current_price": 395,
    "discount_percentage": "60%",
    "return_period": 14,
    "delivery_date": "25 dec 2024",
    "rating": {
      "stars": 4.4,
      "count": "65k"
    }
  },
  {
    "id": "41",
    "image": "/petfood11.webp",
    "company": "Doggo Delights",
    "item_name": "Chicken & Veggie Wet Dog Food",
    "original_price": 795,
    "current_price": 595,
    "discount_percentage": "10%",
    "return_period": 14,
    "delivery_date": "27 dec 2024",
    "rating": {
      "stars": 4.1,
      "count": "46k"
    }
  },
  {
    "id": "42",
    "image": "/petfood12.webp",
    "company": "PawPride",
    "item_name": "Healthy Weight Control Formula",
    "original_price": 699,
    "current_price": 499,
    "discount_percentage": "29%",
    "return_period": 14,
    "delivery_date": "22 dec 2024",
    "rating": {
      "stars": 4.6,
      "count": "128k"
    }
  },
  {
    "id": "43",
    "image": "/petfood13.webp",
    "company": "BarkBuddy",
    "item_name": "Organic Chicken & Brown Rice",
    "original_price": 499,
    "current_price": 399,
    "discount_percentage": "20%",
    "return_period": 14,
    "delivery_date": "18 dec 2024",
    "rating": {
      "stars": 4.2,
      "count": "18k"
    }
  },
  {
    "id": "44",
    "image": "/petfood14.webp",
    "company": "Fido Feast",
    "item_name": "Beef & Vegetable Dry Mix",
    "original_price": 1195,
    "current_price": 699,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "25 dec 2024",
    "rating": {
      "stars": 4.7,
      "count": "33k"
    }
  },
  {
    "id": "45",
    "image": "/petfood15.jpeg",
    "company": "Pawlicious",
    "item_name": "Puppy Salmon Starter Pack",
    "original_price": 799,
    "current_price": 499,
    "discount_percentage": "38%",
    "return_period": 14,
    "delivery_date": "30 dec 2024",
    "rating": {
      "stars": 4.5,
      "count": "76k"
    }
  }
  ,
   
      {
    "id": "17",
    "image": "/medicine1.jpeg",
    "company": "PetCure Labs",
    "item_name": "Multivitamin Syrup for Dogs & Cats",
    "original_price": 1045,
    "current_price": 606,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "11 dec 2024",
    "rating": {
      "stars": 4.5,
      "count": "57k"
    }
  },
  {
    "id": "18",
    "image": "/medicine2.jpeg",
    "company": "VetWell",
    "item_name": "Deworming Tablets for All Breeds",
    "original_price": 2599,
    "current_price": 1507,
    "discount_percentage": "42%",
    "return_period": 14,
    "delivery_date": "16 dec 2024",
    "rating": {
      "stars": 4.1,
      "count": "28k"
    }
  },
  {
    "id": "19",
    "image": "/medicine3.jpeg",
    "company": "CanineCare Pharma",
    "item_name": "Joint Support Glucosamine Supplement",
    "original_price": 1599,
    "current_price": 495,
    "discount_percentage": "69%",
    "return_period": 14,
    "delivery_date": "19 dec 2024",
    "rating": {
      "stars": 4.8,
      "count": "49k"
    }
  },
  {
    "id": "20",
    "image": "/medicine4.jpeg",
    "company": "PetShield",
    "item_name": "Flea & Tick Prevention Spot-On",
    "original_price": 999,
    "current_price": 999,
    "discount_percentage": "80%",
    "return_period": 14,
    "delivery_date": "21 dec 2024",
    "rating": {
      "stars": 4.6,
      "count": "10k"
    }
  },
  {
    "id": "21",
    "image": "/medicine5.jpeg",
    "company": "PawMedic",
    "item_name": "Antibiotic Ointment for Wounds",
    "original_price": 1399,
    "current_price": 489,
    "discount_percentage": "65%",
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": {
      "stars": 4.2,
      "count": 3500
    }
  },
  {
    "id": "22",
    "image": "/medicine6.png",
    "company": "FurLife Healthcare",
    "item_name": "Skin & Coat Omega-3 Supplement",
    "original_price": 3995,
    "current_price": 2995,
    "discount_percentage": "70%",
    "return_period": 14,
    "delivery_date": "16 dec 2024",
    "rating": {
      "stars": 3.9,
      "count": "34k"
    }
  },
  {
    "id": "23",
    "image": "/medicine7.png",
    "company": "VetBuddy",
    "item_name": "Eye Drops for Dogs & Cats",
    "original_price": 795,
    "current_price": 495,
    "discount_percentage": "69%",
    "return_period": 14,
    "delivery_date": "19 dec 2024",
    "rating": {
      "stars": 3.9,
      "count": "43k"
    }
  },
  {
    "id": "24",
    "image": "/medicine8.png",
    "company": "PawVitals",
    "item_name": "Ear Cleaning Solution for Pets",
    "original_price": 895,
    "current_price": 495,
    "discount_percentage": "50%",
    "return_period": 14,
    "delivery_date": "17 dec 2024",
    "rating": {
      "stars": 3.4,
      "count": "76k"
    }
  },
  {
    "id": "25",
    "image": "/medicine9.jpeg",
    "company": "AnimalAid",
    "item_name": "Calcium Supplement Tablets",
    "original_price": 1095,
    "current_price": 795,
    "discount_percentage": "30%",
    "return_period": 14,
    "delivery_date": "30 dec 2024",
    "rating": {
      "stars": 4.3,
      "count": "52k"
    }
  },
  {
    "id": "26",
    "image": "/medicine10.jpeg",
    "company": "PupHealth",
    "item_name": "Probiotic Powder for Digestion",
    "original_price": 695,
    "current_price": 395,
    "discount_percentage": "60%",
    "return_period": 14,
    "delivery_date": "25 dec 2024",
    "rating": {
      "stars": 4.4,
      "count": "65k"
    }
  },
  {
    "id": "27",
    "image": "/medicine11.jpeg",
    "company": "VetTrust",
    "item_name": "Liver Tonic Syrup for Pets",
    "original_price": 795,
    "current_price": 595,
    "discount_percentage": "10%",
    "return_period": 14,
    "delivery_date": "27 dec 2024",
    "rating": {
      "stars": 4.1,
      "count": "46k"
    }
  },
  {
    "id": "28",
    "image": "/medicine12.jpeg",
    "company": "PetFirst",
    "item_name": "Deworming Syrup for Puppies",
    "original_price": 1295,
    "current_price": 995,
    "discount_percentage": "20%",
    "return_period": 14,
    "delivery_date": "26 dec 2024",
    "rating": {
      "stars": 3.8,
      "count": "65k"
    }
  },
  {
    "id": "29",
    "image": "/medicine13.png",
    "company": "PawRelief",
    "item_name": "Anti-Allergy Tablets for Dogs",
    "original_price": 995,
    "current_price": 395,
    "discount_percentage": "60%",
    "return_period": 14,
    "delivery_date": "24 dec 2024",
    "rating": {
      "stars": 4.9,
      "count": "37k"
    }
  },
  {
    "id": "30",
    "image": "/medicine14.jpeg",
    "company": "PetWellness",
    "item_name": "Pain Relief Chewables for Dogs",
    "original_price": 0,
    "current_price": 0,
    "discount_percentage": "0%",
    "return_period": 0,
    "delivery_date": "",
    "rating": {
      "stars": 5.0,
      "count": "45k"
    }
  },
  {
    "id": "31",
    "image": "/medicine15.jpeg",
    "company": "HappyTail Care",
    "item_name": "Puppy Immunity Booster Syrup",
    "original_price": 0,
    "current_price": 0,
    "discount_percentage": "0%",
    "return_period": 0,
    "delivery_date": "",
    "rating": {
      "stars": 5.0,
      "count": "45k"
    }
  }


    ],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const itemsAction=itemsSlice.actions;
 export default itemsSlice;