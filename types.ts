export type ComicProps = {
    id: number;
    name: string;
    fullname: string;
    image: string;
    publisher: string;
};

export type ComicItem = {
    id: string;
    name: string;
    biography: {
        "full-name": string;
        publisher: string;
    };
    image: {
        url: string;
    };
};