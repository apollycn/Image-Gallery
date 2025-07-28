import ImageGallery from '@/components/image-gallery';
import { UnsplashImage } from '@/types/unsplash-image';
import { Metadata } from 'next';

interface PageProps {
    params: { topic: string };
}

export async function generateMetadata({
    params,
}: {
    params: Promise<PageProps['params']>;
}): Promise<Metadata> {
    const { topic }: PageProps['params'] = await params;

    return {
        title: `${topic} - NextJS 13.4 Image Gallery`,
    };
}

export function generateStaticParams() {
    return ['health', 'fitness', 'coding'].map((topic) => ({ topic }));
}

async function Page({ params }: { params: Promise<PageProps['params']> }) {
    const { topic }: PageProps['params'] = await params;

    const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
        { cache: 'force-cache' },
    );
    const images: UnsplashImage[] = await response.json();

    return (
        <div className="px-4 pt-24 min-h-screen">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center capitalize">
                {topic}
            </h1>

            <ImageGallery images={images} topic={topic} />
        </div>
    );
}

export default Page;
