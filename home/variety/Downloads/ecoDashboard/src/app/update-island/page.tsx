import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateIsland from "@/components/updateIsland";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateIslandPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateIsland />
      </div>
    </DefaultLayout>
  );
};

export default UpdateIslandPage
