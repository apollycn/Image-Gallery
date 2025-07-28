import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';
import { UnsplashUser } from '@/types/unsplash-user';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
    params: { username: string };
}

async function getUser(username: string): Promise<UnsplashUser> {
    const response = await fetch(
        `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    );

    if (response.status === 404) notFound();

    return await response.json();
}

export async function generateMetadata({
    params,
}: {
    params: Promise<PageProps['params']>;
}): Promise<Metadata> {
    const { username }: PageProps['params'] = await params;
    const user = await getUser(username);

    return {
        title: user.username + ' - NextJS Image Gallery',
    };
}

async function Page({ params }: { params: Promise<PageProps['params']> }) {
    const { username }: PageProps['params'] = await params;
    const user = await getUser(username);

    return (
        <div className="flex items-center justify-center min-h-screen pb-20">
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link" className="text-xl">
                        @{user.username}
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent className="scale-120">
                    <div className="flex gap-4">
                        <Avatar>
                            <AvatarImage src={user.profile_image.large} />
                            <AvatarFallback>VC</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <h4 className="text-sm font-bold">
                                @{user.username}
                            </h4>
                            <div>
                                <p className="text-sm">
                                    First name: {user.first_name}
                                </p>
                                <p className="text-sm">
                                    Last name: {user.last_name}
                                </p>
                            </div>
                            <a
                                href={`https://unsplash.com/${user.username}`}
                                className="text-muted-foreground text-xs hover:underline hover:text-blue-200"
                                target="_blank"
                            >
                                Visit Unsplash Profile →
                            </a>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}

export default Page;
