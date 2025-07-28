import { UnsplashImage } from '@/types/unsplash-image';
import { AlertCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';
import FetchInfoAlert from '../../../components/fetch-info-alert';

export const metadata: Metadata = {
    title: 'Dynamic Fetching - NextJS Image Gallery',
};

async function Page() {
    const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    );
    const image: UnsplashImage = await response.json();

    const width = Math.min(400, image.width);
    const height = (width / image.width) * image.height;

    return (
        <div className="flex items-center justify-center min-h-screen pt-15 pb-15">
            <div style={{ width }} className="flex flex-col items-center gap-3">
                <FetchInfoAlert
                    icon={AlertCircleIcon}
                    title="This page fetches and caches data dynamically"
                    description="Everytime you refresh the page, you get a new image from the Unsplash API."
                ></FetchInfoAlert>

                <Image
                    src={image.urls.raw}
                    width={width}
                    height={height}
                    alt={image.description || 'Random Unsplash image'}
                    className="rounded-md shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-slate-800"
                />

                <p className="mt-2 text-sm text-muted-foreground">
                    by{' '}
                    <Link
                        href={`/users/${image.user.username}`}
                        className="underline text-primary"
                    >
                        {image.user.username}
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Page;
