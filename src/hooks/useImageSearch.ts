import { useRef, useState } from 'react';
import { UnsplashImage } from '@/types/unsplash-image';

export function useImageSearch() {
    const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
        null,
    );
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const query = inputRef.current?.value.trim();

        if (query) {
            try {
                setSearchResults(null);
                setLoading(true);
                setIsError(false);

                const response = await fetch(`/api?query=${query}`);
                const images: UnsplashImage[] = await response.json();
                setSearchResults(images);
                console.log(images);
            } catch (error) {
                console.error(error);
                setIsError(true);
            } finally {
                setLoading(false);
            }
        }
    }

    function handleBackClick() {
        setSearchResults(null);
        setLoading(false);
        setIsError(false);
        if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.blur();
        }
    }

    return {
        inputRef,
        searchResults,
        loading,
        isError,
        handleSubmit,
        handleBackClick,
    };
}
