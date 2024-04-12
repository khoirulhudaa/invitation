import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddArticle from "@/components/addArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const AddArticlePage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <AddArticle />
      </div>
    </DefaultLayout>
  );
};

export default AddArticlePage
