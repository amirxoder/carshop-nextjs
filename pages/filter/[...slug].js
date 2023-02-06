import { useRouter } from "next/router";
import React from "react";
import CarsList from "../../components/templates/CarsList";
import carsData from "../../data/carsData";

const FiteredCars = () => {
  const route = useRouter();
  const [min, max] = route?.query?.slug || [];

  console.log(min, max);

  const filteredData = carsData.filter(
    (car) => car.price > min && car.price < max
  );

  if (!filteredData.length) return <h3>Not Found</h3>;

  return (
    <>
      <CarsList data={filteredData} />
    </>
  );
};

export default FiteredCars;
