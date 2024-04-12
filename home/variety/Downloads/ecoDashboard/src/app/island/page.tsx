import Islands from "@/components/Island";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UsersPage = () => {
  return (
    <DefaultLayout>

      <div className="flex flex-col gap-10">
        <Islands />
      </div>
    </DefaultLayout>
  );
};

export default UsersPage
