import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Vase"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Bag"
          price="180.00"
          color="Gray"
          badge={false}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
      </div>
    </div>
  );
};

export default BestSellers;
