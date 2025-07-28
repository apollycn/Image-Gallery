'use client';

import { RefObject } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface SearchQueryInputProps {
    ref: RefObject<HTMLInputElement | null>;
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function SearchQueryInput({ ref, onSubmit }: SearchQueryInputProps) {
    return (
        <div className="grid w-full max-w-sm items-center gap-5">
            <div className="flex flex-col gap-2">
                <Label htmlFor="query">Search query</Label>
                <Input
                    ref={ref}
                    type="search"
                    id="query"
                    placeholder="E.g. cats, trees, games"
                />
                <Label
                    htmlFor="query"
                    className="text-xs text-muted-foreground"
                >
                    Search for images from query.
                </Label>
            </div>

            <Button
                type="submit"
                variant="outline"
                className="cursor-pointer"
                onClick={onSubmit}
            >
                Search
            </Button>
        </div>
    );
}

export default SearchQueryInput;
