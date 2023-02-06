import { useRouter } from "next/router";
import React from "react";
import CardDetails from "../../components/templates/CardDetails";
import carsData from "../../data/carsData";

const CarDetails = () => {
  const { query } = useRouter();
  const car = carsData[query.id - 1];

  return (
    <>
      <CardDetails {...car} />
    </>
  );
};

export default CarDetails;
