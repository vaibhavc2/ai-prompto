import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[100%] flex-col justify-center">
      <div className="text-center text-3xl">NotFound - 404</div>
      <Button variant={"link"}>
        <Link href={"/"}>Go to Home</Link>
      </Button>
    </main>
  );
};
export default NotFound;
