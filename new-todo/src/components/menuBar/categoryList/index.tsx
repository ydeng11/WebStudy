import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import useStore from "@/components/stores/todoStore";


export function CategoryList() {
    const {todos} = useStore();
    return (
        <ScrollArea className="h-72 w-48 rounded-md pl-4">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Categories</h4>
                {todos.map((todo) => (
                    <>
                        <div key={todo.id} className="text-sm">
                            <span className="text-accent-500 font-bold mr-1">#</span>
                            {todo.category}
                        </div>
                        <Separator className="my-2"/>
                    </>
                ))}
            </div>
        </ScrollArea>
    )
}
