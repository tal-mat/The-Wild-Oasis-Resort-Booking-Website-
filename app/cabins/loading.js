import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <Spinner />
      <p className="text-lg text-primary-200 text-center">
        Loading cabin data...
      </p>
    </div>
  );
}
