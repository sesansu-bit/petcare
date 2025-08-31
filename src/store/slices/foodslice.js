"use client"
import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    items: [
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
    
],
  },
  reducers: {
    setFoods: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setFoods } = foodSlice.actions;
export default foodSlice.reducer;
