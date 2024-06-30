import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRef } from "react";

type FilterRefs = {
    categoryRef: React.RefObject<string>;
    hashtagRef: React.RefObject<string>;
};

function submit(filterRefs: FilterRefs) {
    console.log({
        category: filterRefs.categoryRef.current,
        hashtag: filterRefs.hashtagRef.current,
    });
}

export function Filters() {
    const categoryRef = useRef<string>("");
    const hashtagRef = useRef<string>("");

    // get unique categories and hashtags here

    const handleValueChange = (ref: React.MutableRefObject<string>, value: string) => {
        ref.current = value;
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="lg">Filters</Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-80"
                onPointerDownOutside={() => submit({ categoryRef, hashtagRef })}
            >
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Filters</h4>
                        <p className="text-sm text-muted-foreground">Set the filters</p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="category">Category</Label>
                            <Select onValueChange={(value) => handleValueChange(categoryRef, value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="hashtag">Hashtag</Label>
                            <Select onValueChange={(value) => handleValueChange(hashtagRef, value)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
