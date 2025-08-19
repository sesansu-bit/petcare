"use client"
import { createSlice } from "@reduxjs/toolkit";

const clothSlice = createSlice({
  name: "cloth",
  initialState: {
    items: [ 
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
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
    },
    "type": "cloth"
  }

],
  },
  reducers: {
    setClothes: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setClothes } = clothSlice.actions;
export default clothSlice.reducer;
