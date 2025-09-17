import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const res = await fetch(`https://picsum.photos/v2/list`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return { title: "User not found", description: "Not found" };
  }

  const photos = await res.json();
  const photo = photos[0]; 

  return {
    title: `${photo.title} | nextApp`,
    description: `${photo.thumbnailUrl}`,
  };
}

export default async function AppSSR() {
  const res = await fetch("https://picsum.photos/v2/list", {
    cache: "no-store",
  });
  const photos = await res.json();

  return (
      <>
      <section className="courses w-[full] bf-[#f5f5f9] font-Cabin lg:px-[150px] px-[50px] py-[30px] h-[100vh]">
        <h2 className="m-auto text-center text-[30px] font-[700] pb-[20px]">Most Popular Courses</h2>
        {/* start cards  */}
      <ul className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-[30px] shadow-[2px_2px_2px_2px_rgb(0_0_0_/_5%)]  ">
        {photos.map((item) => (
          <li key={item.id} className="rounded-[50px] border-[2px] border-[#efebeb] py-[30px] shadow-lg overflow-hidden flex flex-col justify-center items-center hover:scale-y-[1.1] transition-all transation-duration-[2000ms]">
            <img
              src={item.download_url}
              alt={item.author}
              className="w-[250px] max-w-[calc(100%-20px)] h-[250px] rounded-[50px] items-center"
            />
            <h4 className="mt-[30px] text-[20px] text-center text-max-[calc(100%-20px)] font-[700] text-[#127c71] "> <Link href={`/courses/${photos.id}`}>{item.author}</Link></h4>
          </li>
        ))}
          </ul>
      
        </section>
    </>
  );
}
