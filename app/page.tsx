import { redirect } from "next/navigation";
import MotionPro from "@/components/MotionPro";

export default function Home() {
  // redirect("/profile");
  return (
    <div>
      <MotionPro />
    </div>
  );
}
