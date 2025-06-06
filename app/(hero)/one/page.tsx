
import { Metadata } from "next";
import Onelist from "../../component/onelist";
export const metadata: Metadata = {
  title: "One",
  description: "One",
};

export default function OnePage() {
  return (
   <Onelist />
  );
}
