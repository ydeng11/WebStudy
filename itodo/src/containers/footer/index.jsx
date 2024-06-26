import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';


function Footer(props) {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div>
            <>
                <Modal opened={opened} onClose={close} title="Authentication" centered>
                    {/* Modal content */}
                </Modal>

                <Button onClick={open}>Open centered Modal</Button>
            </>
            <button >Show Completed</button>
        </div>
    );
}

export default Footer;