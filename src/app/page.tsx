import { Feed } from "@/components/custom";

export default function Home() {
  return (
    <section className="flex-center w-full flex-col">
      <h1 className="head_text text-center dark:text-gray-100">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center max-sm:block">
          AI-Powered Prompts
        </span>
      </h1>

      <p className="desc text-center">
        AI-Prompto is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed />
    </section>
  );
}
