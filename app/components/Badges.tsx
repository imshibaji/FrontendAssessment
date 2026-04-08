export default function Badges({items}: {items: string[]}) {
    return(
        <div className="flex flex-wrap gap-3">
            {items.map((item: string) => (
                <Badge key={item} name={item} />
            ))}
        </div>
    );
}

export function Badge({name}: {name: string}) {
    return(
        <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
            {name}
        </span>
    );
}