import Categories from "../../components/module/Categories";
import SearchBar from "../../components/module/SearchBar";
import carsData from "../../data/carsData";
import CarsPage from "./../../components/templates/CarsPage";

const Cars = () => {
  return (
    <>
      <Categories />
      <SearchBar />
      <CarsPage data={carsData} />
    </>
  );
};

export default Cars;
