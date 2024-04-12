import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Tour from "@/components/Tour";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cirebon visual data",
  description: "Website resmi Diskominfo Kabupaten Cirebon",
};

const TourPage = () => {
  return (
    <DefaultLayout>

      <div className="flex flex-col gap-10">
        <Tour />
      </div>
    </DefaultLayout>
  );
};

export default TourPage
