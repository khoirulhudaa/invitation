import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateUser from "@/components/updateUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateUserPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateUser />
      </div>
    </DefaultLayout>
  );
};

export default UpdateUserPage
