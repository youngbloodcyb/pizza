import { list } from "@vercel/blob";

export async function VideoComponent({ fileName }: { fileName: string }) {
  console.log(fileName);
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <div className=" border-2 border-gray-400 shadow-md bg-gray-200">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-1 flex justify-between items-center">
        <span className="text-sm font-bold">propaganda.mp4</span>
        <div className="flex space-x-1">
          <div className="hidden w-4 h-4 bg-gray-300 border border-gray-500 text-black text-xs md:flex items-center justify-center">
            _
          </div>
          <div className="hidden w-4 h-4 bg-gray-300 border border-gray-500 text-black text-xs md:flex items-center justify-center">
            □
          </div>
          <div className="w-4 h-4 bg-gray-300 border border-gray-500 text-black text-xs flex items-center justify-center">
            X
          </div>
        </div>
      </div>
      <div className="p-2">
        {url ? (
          <video
            controls
            preload="none"
            aria-label="Video player"
            className="w-full border border-gray-600 bg-black"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag. Sounds like a skill
            issue.
          </video>
        ) : (
          <div className="w-full h-48 bg-black flex items-center justify-center text-white">
            Loading video...
          </div>
        )}
      </div>
    </div>
  );
}
