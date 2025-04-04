import ComicDisplay from "@/components/comic-display";
import getComics from "@/lib/getComics";

export default async function SupesPage() {
    const comics = await getComics();

    return (
        <main>
            <h1>
                SUPES
            </h1>
            <ComicDisplay inputComics={comics} />
        </main>
    )
}