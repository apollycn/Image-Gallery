import { UnsplashImage } from '@/types/unsplash-image';
import Image from 'next/image';

interface ImageGalleryProps {
    images: UnsplashImage[];
    topic?: string;
}

function ImageGallery({ images, topic }: ImageGalleryProps) {
    return (
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto pb-10">
            {images.map((image) => (
                <Image
                    key={image.urls.raw}
                    src={image.urls.raw}
                    alt={image.description || `Image of ${topic}`}
                    width={500}
                    height={500}
                    className="rounded-md object-cover aspect-square w-full bg-slate-800"
                />
            ))}
        </div>
    );
}

export default ImageGallery;
