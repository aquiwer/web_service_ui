import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Text
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FootballImage from '../../../assets/images/football.webp'
interface MatchInfo {
    isOpen: boolean,
    onClose: any,
    match_name: string,
    match_description: string,
    game_day: any
}
export const MatchInfo = ({ isOpen, match_name, match_description, onClose, game_day }: MatchInfo) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{match_name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Image borderRadius={12} src={FootballImage} />
                    <Text padding={'15px 0px 0px 5px'}>{match_description}</Text>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}