import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDisclosure } from '@mantine/hooks';
import {Modal, Button, TextInput} from '@mantine/core';
import useStore from '../../stores/todoStore';
import styles from '../index.module.css'
import todoStyles from './index.module.css'

function submit(task, addTodo, close) {
    if (task.current.value !== '') {
        const newTodo = {
            id: uuidv4(),
            text: task.current.value,
            completed: false,
            createdAt: new Date()
        }
        addTodo(newTodo);
        task.current.value = '';
        close();
    }
}

function TodoModal() {
    const [opened, { open, close }] = useDisclosure(false);
    const task = useRef('');
    const addTodo = useStore(state => state.addTodo);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Task"
                centered
                padding="lg"
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}>
                <div>
                    <TextInput
                        placeholder="add a new todo"
                        ref={task}
                        className={todoStyles.addTodoInput}
                    />
                    <Button className={todoStyles.addTodoButton} onClick={() => submit(task, addTodo, close)} >Submit</Button>
                </div>
            </Modal>

            <Button onClick={open} size="compact-xl" className={styles.modalButton}>Add todo</Button>
        </>
);
}

export default TodoModal;