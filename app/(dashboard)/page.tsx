import FloatingActionButtons from "@/components/floating-action-buttons";
import BasicTable from "@/components/basic-table";
import SppdDataGrid from "@/components/sppd-data-grid";

const Page = async () => {
  return (
    <div>
      <div className="mt-10">
        
      {/* <BasicTable></BasicTable> */}
      <SppdDataGrid></SppdDataGrid>
      </div>
      <FloatingActionButtons></FloatingActionButtons>
    </div>
  );
};

export default Page;