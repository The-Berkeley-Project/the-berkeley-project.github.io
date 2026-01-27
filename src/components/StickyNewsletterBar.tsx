
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Fixed Newsletter Button in Bottom Right Corner */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onPress={onOpen}
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-105"
          size="lg"
        >
          Join our Newsletter
        </Button>
      </div>

      {/* Modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="pt-6 pb-2">
                <p className="text-gray-700 leading-relaxed">
                  Join our mailing list to learn about volunteering opportunities 
                  and updates about The Berkeley Project!
                </p>
              </ModalBody>
              <ModalFooter className="pt-2 pb-4">
                <Button 
                  color="danger" 
                  variant="light" 
                  onPress={onClose}
                  className="font-medium"
                >
                  Close
                </Button>
                <Button
                  as={Link}
                  color="primary"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeRAxBgF2D0hR7vx9aoeLNkEQD3yIk_i_eoZX0DGVdnTm1r4A/viewform"
                  variant="solid"
                  className="font-medium"
                  isExternal
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
