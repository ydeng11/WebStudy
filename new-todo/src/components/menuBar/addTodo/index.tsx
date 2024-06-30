import { v4 as uuidv4 } from 'uuid';
import { Button } from "@/components/ui/button.tsx";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Ttodo } from "@/components/utils/types.tsx";
import { useRef, useState } from "react";
import useStore from "@/components/stores/todoStore";

type AddTodoRefs = {
    content: React.RefObject<HTMLInputElement>;
    category: React.RefObject<HTMLInputElement>;
    hashTag: React.RefObject<HTMLInputElement>;
};

function submit(addTodoRefs: AddTodoRefs, addTodo: (todo: Ttodo) => void, closeDialog: () => void) {
    const hashTagArray = (addTodoRefs.hashTag.current?.value ?? '').split(',').map(tag => tag.trim());
    const newTodo: Ttodo = {
        id: parseInt(uuidv4()),
        content: addTodoRefs.content.current?.value ?? '',
        category: addTodoRefs.category.current?.value ?? '',
        hashtag: hashTagArray,
        isDone: false,
        createdAt: new Date()
    };
    addTodo(newTodo);
    closeDialog();
}

export default function AddTodo() {
    const { addTodo } = useStore();
    const contentRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLInputElement>(null);
    const hashTagRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);

    const closeDialog = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="lg">Add new todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        submit({ content: contentRef, category: categoryRef, hashTag: hashTagRef }, addTodo, closeDialog);
                    }}
                >
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="content" className="text-right">
                                Content
                            </Label>
                            <Input
                                id="content"
                                className="col-span-3"
                                ref={contentRef}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <Input
                                id="category"
                                className="col-span-3"
                                ref={categoryRef}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="hashtag" className="text-right">
                                #
                            </Label>
                            <Input
                                id="hashtag"
                                placeholder="use comma to separate tags"
                                className="col-span-3"
                                ref={hashTagRef}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
