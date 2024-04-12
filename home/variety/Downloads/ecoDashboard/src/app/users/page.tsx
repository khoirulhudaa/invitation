import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Users from "@/components/Users";

export const metadata: Metadata = {
  title: "Cirebon visual data",
  description: "Website resmi Diskominfo Kabupaten Cirebon",
};

const UsersPage = () => {
  return (
    <DefaultLayout>

      <div className="flex flex-col gap-10">
        <Users />
      </div>
    </DefaultLayout>
  );
};

export default UsersPage
