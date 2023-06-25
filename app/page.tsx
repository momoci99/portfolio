import Image from "next/image";
import Header from "@/components/Header";

import Main from "@/components/Main";

export default function Page() {
  return (
    <main
      className=""
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Header />
      <Main></Main>
    </main>
  );
}
