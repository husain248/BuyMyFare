import Link from "next/link";

export default function AboutCta() {
  return (
    <div className="flex justify-between items-center gap-5 flex-wrap bg-[#f2efe9] p-5 w-full">
      <h1 className=" text-2xl font-main">
        Your Gateway to Incredible Journeys
      </h1>
      <Link href="/contact" className="btn btn-primary btn-hover light">
        <span>Get Started Today!</span>
      </Link>
    </div>
  );
}
