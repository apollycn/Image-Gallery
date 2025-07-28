import { Loader2 } from 'lucide-react';

function Loading() {
    return (
        <div className="fixed inset-0 z-5 flex items-center justify-center bg-white/1 backdrop-blur-sm">
            <Loader2 className="animate-spin h-12 w-12 text-primary" />
        </div>
    );
}

export default Loading;
