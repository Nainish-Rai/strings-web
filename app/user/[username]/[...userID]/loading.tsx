import Loader from "@/app/components/Loader";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="-ml-16">
      <Loader />;
    </div>
  );
}
