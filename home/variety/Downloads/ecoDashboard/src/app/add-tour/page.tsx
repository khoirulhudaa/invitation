import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddTour from "@/components/addTour";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddTourPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddTour />
      </div>
    </DefaultLayout>
  );
};

export default AddTourPage
