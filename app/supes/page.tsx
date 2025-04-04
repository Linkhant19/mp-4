import ComicDisplay from "@/components/comic-display";
import getComics from "@/lib/getComics";

export default async function SupesPage() {
    const comics = await getComics();

    return (
        <main className="flex flex-col justify-center items-center bg-red-300">
            <h1 className="text-gray-900 text-4xl font-semibold p-3">
                ALL MY FAVORITE SUPES
            </h1>
            <ComicDisplay inputComics={comics} />
        </main>
    )
}