'use client'
import React, {useState} from "react";

import Image from "next/image";
import Modal from 'react-modal';

import PizzaDetails from "./PizzaDetails";

import {IoCloseOutline} from 'react-icons/io5'

const Pizza = ({pizza}) => {
  return <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">

    {/* picture */}
    <Image
      width={270}
      height={270}
      src={pizza.image}
      alt=''
      priority={1}
    />

    {/* name */}
    <div>
      <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
        {pizza.name}
      </div>
    </div>

    {/* description */}
      <div className="text-sm font-medium min-h-[60px] mb-6">{pizza.description}</div>

    {/* price */}
    <div>
      <div className="hidden lg:flex text-txl font-semibold">starts at {pizza.priceSm}</div>
      <button className="hidden lg:flex ">Choose</button>
    </div>

  </div>;
};

export default Pizza;
