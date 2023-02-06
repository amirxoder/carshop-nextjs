import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/module/Card";
import carsData from "../../data/carsData";

const Category = () => {
  const { query } = useRouter();
  const { category } = query;

  const selectedCars = carsData.filter((car) => car.category === category);

  return (
    <div className="container">
      {selectedCars.map((car) => (
        <Card key={car.id} {...car} />
      ))}
      <Link href="/cars">
        <div className="back">Back ← </div>
      </Link>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap:wrap;
          gap: 2rem;
          position: relative;
          margin-top: 2rem;
        }
        .back {
          position: absolute;
          top: -1.5rem;
          left: 1rem;
          font-size:.7rem;
          background: greenyellow;
          padding: 0.5rem;
          border-radius: 0.6rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Category;
