import { ComicProps } from '@/types';

export default function ComicCard({id, name, fullname, image, publisher}: ComicProps) {
    return (
        <div>
            {image && (<img src={image} alt={name} className='w-full h-auto mb-2' />)}
            <h1>{name}</h1>
            <p>id: {id}</p>
            <p>fullname: {fullname}</p>
            <p>publisher: {publisher}</p>
        </div>
    );
}