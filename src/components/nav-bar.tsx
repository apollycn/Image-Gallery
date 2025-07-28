'use client';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
    const pathName = usePathname();

    return (
        <div className="fixed top-0 left-0 w-full z-10">
            <NavigationMenu className="p-3 relative" viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            className={`${navigationMenuTriggerStyle()} flex-row items-center gap-2`}
                        >
                            <Link href="/">
                                <GalleryVerticalEnd className="text-white" />
                                NextJS Image Gallery
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            data-active={pathName === '/static'}
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link href="/static">Static</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            data-active={pathName === '/dynamic'}
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link href="/dynamic">Dynamic</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink
                            asChild
                            data-active={pathName === '/isr'}
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link href="/isr">ISR</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Topics</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[150px]">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/topics/health">
                                            Health
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/topics/fitness">
                                            Fitness
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/topics/coding">
                                            Coding
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

export default NavBar;
