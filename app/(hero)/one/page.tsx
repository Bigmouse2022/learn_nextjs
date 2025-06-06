
import { Metadata } from "next";
import Onelist from "../../component/onelist";
export const metadata: Metadata = {
  title: "动态路由",
  description: "One",
};

export default function OnePage() {
  return (
   <Onelist />
  );
}
