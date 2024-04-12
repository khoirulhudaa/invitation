import DefaultLayout from "@/components/Layouts/DefaultLayout";
import UpdateArticle from "@/components/updateArticle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ecoNusantara",
  description: "Website ecoNusantara",
};

const UpdateArticlePage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col gap-10">
        <UpdateArticle />
      </div>
    </DefaultLayout>
  );
};

export default UpdateArticlePage
