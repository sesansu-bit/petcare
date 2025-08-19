"use client"
import { createSlice } from "@reduxjs/toolkit";

const medicineSlice = createSlice({
  name: "medicine",
  initialState: {
    items: [ 
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
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
    },
    "type": "medicine"
  }

],
  },
  reducers: {
    setMedicines: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMedicines } = medicineSlice.actions;
export default medicineSlice.reducer;
