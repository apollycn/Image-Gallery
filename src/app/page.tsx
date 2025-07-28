'use client';

import SearchQueryInput from '@/components/search-query-input';
import Loading from './loading';
import ImageGallery from '@/components/image-gallery';
import { Button } from '@/components/ui/button';
import { useImageSearch } from '@/hooks/useImageSearch';
import { GalleryVerticalEnd } from 'lucide-react';

function SearchInput() {
    const {
        inputRef,
        searchResults,
        loading,
        isError,
        handleSubmit,
        handleBackClick,
    } = useImageSearch();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pb-15">
            {!searchResults && (
                <div className="flex flex-col items-center justify-center gap-4 px-10 py-15 bg-muted/15 rounded-2xl shadow-md min-w-100">
                    <GalleryVerticalEnd className="text-primary w-12 h-12 animate-bounce" />
                    <SearchQueryInput ref={inputRef} onSubmit={handleSubmit} />
                </div>
            )}

            <div>
                {loading && <Loading />}
                {isError && <p>Something whet wrong. Please try again.</p>}
                {searchResults?.length === 0 && (
                    <p>Nothing found. Try a different query!</p>
                )}
            </div>

            {searchResults && (
                <div className="flex flex-col items-center pt-30 px-4">
                    <ImageGallery images={searchResults} />
                    <Button variant="outline" onClick={handleBackClick}>
                        Back
                    </Button>
                </div>
            )}
        </div>
    );
}

export default SearchInput;
