import { Meta, HeaderTitle, AddTableItem, LinksTable } from "../components";

export default function List() {
  return (
    <>
      <Meta title="Login Project" />
      <HeaderTitle title="Bookmarks" />
      <div className="mt-3 mb-12">
        <AddTableItem />
        <LinksTable />
      </div>
    </>
  );
}
