import Link from "next/link";
import Categories from "../components/module/Categories";
import SearchBar from "../components/module/SearchBar";
import CarsList from "../components/templates/CarsList";
import carsData from "../data/carsData";

export default function Home() {
  const selectedCars = carsData.slice(0, 3);
  console.log(selectedCars);

  return (
    <div>
      <Categories />
      <SearchBar />
      <Link href="/cars">
        <div className="btn">See All Cars</div>
      </Link>
      <CarsList data={selectedCars} />
      <style jsx>
        {`
          .btn {
            text-align: center; 
            border:1px solid rgba(0,0 ,0,.4);
            border-radius:5rem;
            padding: 1rem;
            max-width: 200px;
            margin: 1rem;
          }
        `}
      </style>
    </div>
  );
}
