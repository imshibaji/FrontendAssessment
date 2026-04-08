import { useEffect, useState } from "react";

export default function PriceDetails({ws}: {ws: any}) {
    const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        // This only runs on the client
        setDate(new Date(ws.available_from).toLocaleDateString());
    }, [ws.available_from]);
    return (
        <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Space Type</span>
                <span className="font-bold text-slate-900 dark:text-white">{ws.type}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Max Capacity</span>
                <span className="font-bold text-slate-900 dark:text-white">{ws.desks} Desks</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-slate-500">Available From</span>
                <span className="font-bold text-slate-900 dark:text-white">{date || 'Loading...'}</span>
            </div>
        </div>
    );
}