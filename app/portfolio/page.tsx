
import {Metadata} from "next";
import Main from "@/components/portfolio/main";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio"
}

export default function Page() {
  return (
        <Main/>
  );
}
