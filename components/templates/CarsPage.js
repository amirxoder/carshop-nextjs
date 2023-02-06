import styles from "./CarsPage.module.css";
import Card from "../module/Card";
import Categories from "../module/Categories";

const CarsPage = ({ data }) => {
  return (
    <div className={styles.container}>
      {/* <Categories /> */}
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CarsPage;
