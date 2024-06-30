import React from 'react';
import { useDisclosure } from "@mantine/hooks";
import { Button, Modal, List, Box, Space } from "@mantine/core";
import useStore from "../../stores/todoStore";
import styles from "../index.module.css"

function ShowCompletedModal(props) {
    const [opened, { open, close }] = useDisclosure(false);
    const allTodos = useStore(state => state.todos);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Show Completed"
                centered
                overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                }}
                padding="lg"
            >
                <Box padding="md">
                    <Space h="md" /> {/* Add space above the list */}
                    <List className={styles.modalList}>
                        {allTodos.filter(todo => todo.completed === true).map(todo => (
                            <List.Item className={styles.modalListItem} key={todo.id}>{todo.text}</List.Item>
                        ))}
                    </List>
                    <Space h="md" /> {/* Add space below the list */}
                </Box>
            </Modal>
            <Box padding="md">
                <Button onClick={open} size="compact-xl" className={styles.modalButton}>Show Completed</Button>
            </Box>
        </>
    );
}

export default ShowCompletedModal;
