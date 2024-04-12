import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import Dashboard from '@/components/Dashboard'

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "ecoNusantara",
};

const Dashboards = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <Dashboard />
      </div>
    </DefaultLayout>
  );
};

export default Dashboards
