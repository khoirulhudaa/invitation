import Articles from "@/components/Article";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cirebon visual data",
  description: "Website resmi Diskominfo Kabupaten Cirebon",
};

const ArticlePage = () => {
  return (
    <DefaultLayout>

      <div className="flex flex-col gap-10">
        <Articles />
      </div>
    </DefaultLayout>
  );
};

export default ArticlePage
