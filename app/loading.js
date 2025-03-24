import Spinner from "@/app/_components/Spinner";

// Loading component renders a spinner during data loading
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  );
}
