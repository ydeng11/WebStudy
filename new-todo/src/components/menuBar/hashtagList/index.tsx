import useStore from "@/components/stores/todoStore";
import {Separator} from "@/components/ui/separator.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

export const HashtagList = () => {
    const {todos} = useStore();
    const tagList: string[] = todos.reduce<string[]>((previousValue, currentValue) => [...previousValue, ...currentValue.hashtag], []);

    return (
        <ScrollArea className="rounded-md pl-4 max-w-xs">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Hashtag</h4>
                {tagList.map((tag,index) => (
                    <>
                        <div key={index} className="text-sm">
                            <span className="text-accent-500 font-bold mr-1">#</span>
                            {tag}
                        </div>
                        <Separator className="my-2"/>
                    </>
                ))}
            </div>
        </ScrollArea>
    );
};
