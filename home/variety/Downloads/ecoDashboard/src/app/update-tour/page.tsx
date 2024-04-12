import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateTour from "@/components/UpdateTour";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateTourPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateTour />
      </div>
    </DefaultLayout>
  );
};

export default UpdateTourPage
