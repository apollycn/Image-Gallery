import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { LucideIcon } from 'lucide-react';

interface FetchInfoAlertProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

function FetchInfoAlert({
    icon: Icon,
    title,
    description,
}: FetchInfoAlertProps) {
    return (
        <Alert className="text-blue-400">
            <Icon></Icon>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription className="text-blue-200">
                {description}
            </AlertDescription>
        </Alert>
    );
}

export default FetchInfoAlert;
