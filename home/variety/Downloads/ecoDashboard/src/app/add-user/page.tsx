import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddUser from "@/components/addUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cirebon visual data",
  description: "Website resmi Diskominfo Kabupaten Cirebon",
};

const AddUserPage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddUser />
      </div>
    </DefaultLayout>
  );
};

export default AddUserPage
