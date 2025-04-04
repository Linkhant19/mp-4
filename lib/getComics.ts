// lib/getComics.ts

import { ComicProps } from "@/types";

function getRandomIds(count: number, max: number): string[] {
    // I am using this function to get random ids from 1 to 731 because the api only returns characters from 1 to 731
    // I also wanted to implement a random function instead of always displaying the same ones
    const ids = new Set<number>();
    while (ids.size < count) {
        const randomId = Math.floor(Math.random() * max) + 1;
        ids.add(randomId);
    }
    return Array.from(ids).map(String);
}

export default async function getComics(): Promise<ComicProps[]> {
    const apiKey = process.env.COMICS_API_KEY;
    const characterIds = getRandomIds(1, 731);

    // I am mapping all the ids to fetch from the api
    // I wil be using Promise.all to fetch all the characters at once
    const fetches = characterIds.map(id =>
        fetch(`https://superheroapi.com/api/${apiKey}/${id}`).then(res => res.json())
    );

    const characters = await Promise.all(fetches);

    return characters.map((item: any) => ({
        id: item.id,
        name: item.name,
        // some of these characters have unknown fields in the data set so I am handling that here
        fullname: item.biography?.["full-name"] ?? "Unknown",
        image: item.image?.url ?? "",
        publisher: item.biography?.publisher ?? "Unknown",
    }));
}


