import React from "react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Link,
  useDisclosure,

} from "@heroui/react";

export default function StickyNewsletterBar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Join our Newsletter</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p>
                  We have our mailing list to learn about volunteering opportunities and updates about The Berkeley Project!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  showAnchorIcon
                  as={Link}
                  color="primary"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeRAxBgF2D0hR7vx9aoeLNkEQD3yIk_i_eoZX0DGVdnTm1r4A/viewform"
                  variant="solid"
                >
                  Click here
                </Button>
    
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
