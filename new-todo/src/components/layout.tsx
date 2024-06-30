import React from 'react';
import AddTodo from "@/components/menuBar/addTodo";
import {Filters} from "@/components/menuBar/filter";
import Header from "@/components/header";
import TodoList from "@/components/display/listing";
import Today from "@/components/display/today";
import {Ttodo} from "@/components/utils/types.tsx";
import {CategoryList} from "@/components/menuBar/categoryList";
// import CategoryList from "@/components/menuBar/categoryList";

const Layout: React.FC = () => {

    const todos: Ttodo[] = [
        {
            id: 1,
            content: "Test",
            category: "Work",
            hashtag: ["#test"],
            createdAt: new Date(),
            isDone: false
        },
        {
            id: 2,
            content: "Test2",
            category: "Work",
            hashtag: ["#test"],
            createdAt: new Date(),
            isDone: false
        }
    ];

    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <div className="mx-auto flex flex-wrap">
                    <div className="w-1/5 flex flex-col items-start space-y-4">
                        <AddTodo />
                        <Filters />
                        <CategoryList />
                    </div>
                    <div className="w-4/5 flex flex-col items-start">
                        <Today />
                        <TodoList todos={todos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
