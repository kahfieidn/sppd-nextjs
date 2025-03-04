"use client";

import QuickFilteringGrid from "@/components/quick-filtering-grid";
import FloatingActionButtons from "@/components/floating-action-buttons";
const Page = () => {
  return (
    <div>

      <div className="mt-10">
      <QuickFilteringGrid></QuickFilteringGrid>

      </div>
      <FloatingActionButtons></FloatingActionButtons>
    </div>
  );
};

export default Page;
