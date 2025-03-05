import FloatingActionButtons from "@/components/floating-action-buttons";
import BasicTable from "@/components/basic-table";


const Page = async () => {
  return (
    <div>
      <div className="mt-10">
      <BasicTable></BasicTable>
      </div>
      <FloatingActionButtons></FloatingActionButtons>
    </div>
  );
};

export default Page;