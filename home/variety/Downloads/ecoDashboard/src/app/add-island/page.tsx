import AddIslands from "@/components/AddIsland";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddIslandPage = () => {
  return (
    <DefaultLayout>

      <div className="flex flex-col gap-10">
        <AddIslands />
      </div>
    </DefaultLayout>
  );
};

export default AddIslandPage
