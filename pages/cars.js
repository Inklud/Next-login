import { Meta, HeaderTitle, AddCar, CarsTable } from "../components";

export default function List() {
  return (
    <>
      <Meta title="Login Project" />
      <HeaderTitle title="Cars" />
      <div className="mt-3 mb-12">
        <AddCar />
        <CarsTable />
      </div>
    </>
  );
}
