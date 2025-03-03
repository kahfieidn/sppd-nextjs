"use client";

import CustomPaginationActionsTable from "@/components/custom-pagination-action-table";
import * as React from "react";
import FloatingActionButtons from "@/components/floating-action-buttons";


export default function Home() {
  return (
    <div>
      <CustomPaginationActionsTable />
      <FloatingActionButtons />
    </div>
  );
}
