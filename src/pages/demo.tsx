export default function DemoOne() {
  return (
    <div className="relative h-[200px] w-[800px]">
      <button className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded">
        Demo Button
      </button>
    </div>
  );
} 