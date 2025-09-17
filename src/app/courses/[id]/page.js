export const dynamic = 'force-dynamic';

export default async function UserDetails({ params }) {
  const id = parseInt(params.id, 10);

  const res = await fetch(`https://picsum.photos/v2/list?page=1&limit=100`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return (
      <section className="h-[100vh] w-full flex justify-center items-center">
        <h2 className="text-red-500 text-2xl">API Error: Unable to fetch photos</h2>
      </section>
    );
  }

  const photos = await res.json();
  const photo = photos[id - 1];

  if (!photo) {
    return (
      <section className="h-[100vh] w-full flex justify-center items-center">
        <h2 className="text-red-500 text-2xl">Photo not found</h2>
      </section>
    );
  }

  return (
    <section className="h-[100vh] w-full flex justify-center items-center">
      <div className="text-center bg-gray-900 p-8 w-[40%] rounded-4xl">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-[250px] h-[250px] rounded-2xl mx-auto mb-4 hover:scale-[1.2] transition-all duration-[1000ms]"
        />
        <h3 className="text-[40px] text-[#b2a6bf]">{photo.author}</h3>
      </div>
    </section>
  );
}
