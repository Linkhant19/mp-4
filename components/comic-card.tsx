import { ComicProps } from '@/types';

export default function ComicCard({ id, name, fullname, image, publisher }: ComicProps) {
    return (
        <div className="bg-white dark:bg-zinc-800 rounded-2xl">
            {image && (
                <img
                    src={image}
                    alt={name}
                    className="w-64 h-64 object-cover rounded-xl mb-4"
                />
            )}
            <div className='flex flex-col flex-wrap justify-center items-center p-3'>
                <h1 className="text-xl font-semibold text-zinc-800 dark:text-white mb-1">{name}</h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-1">ID: {id}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-300 mb-1">Full Name: {fullname}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-300">Publisher: {publisher}</p>
            </div>
            
        </div>
    );
}
