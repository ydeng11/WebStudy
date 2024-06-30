import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import useStore from "@/components/stores/todoStore";
import {Fragment} from "react";


export function CategoryList() {
    const {todos} = useStore();
    return (
        <ScrollArea className="rounded-md pl-4 max-w-xs">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Categories</h4>
                {todos.map((todo,index) => (
                    <Fragment key={index}>
                        <div className="text-sm">
                            {todo.category}
                        </div>
                        <Separator className="my-2"/>
                    </Fragment>
                ))}
            </div>
        </ScrollArea>
    )
}
