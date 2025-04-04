// components/comic-display.tsx


import { ComicProps } from "@/types";
import ComicCard from "./comic-card";

export default function ComicDisplay({comics}: {comics:ComicProps[]}) {
    return (
        <div className="flex flex-wrap justify-center align-center gap-6 p-2 bg-yellow-100 font-mono p-3">
            {comics.map((p) => (
                <ComicCard key={p.id} id={p.id} name={p.name} fullname={p.fullname} image={p.image} publisher={p.publisher} />
            ))}
        </div>
    )
}