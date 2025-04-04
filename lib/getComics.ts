// lib/getComics.ts

import { ComicProps, ComicItem } from "@/types";

export default async function getComics(): Promise<ComicProps[]> {
    const apiKey = process.env.COMICS_API_KEY;

    // these are some cool ones i found, might change later
    const characterIds = [31, 63, 455, 330, 138, 316, 69, 9, 11, 13]; 

    // I am mapping all the ids to fetch from the api
    // I wil be using Promise.all to fetch all the characters at once
    const fetches = characterIds.map(id =>
        fetch(`https://superheroapi.com/api/${apiKey}/${id}`).then(res => res.json())
    );

    const characters = await Promise.all(fetches);

    return characters.map((item: ComicItem) => ({
        id: parseInt(item.id),
        name: item.name,
        // some of these characters have unknown fields in the data set so I am handling that here
        fullname: item.biography?.["full-name"],
        image: item.image?.url ?? "",
        publisher: item.biography?.publisher,
    }));
}


