import { Card, CardHeader, CardBody, CardFooter, Heading, Button, Text, useDisclosure, Image } from '@chakra-ui/react'
import { Match as MatchInterface } from '../../../app/interfaces/Match.interface'
import { MatchInfo } from '../MatchInfo'

interface MatchProps {
  match: MatchInterface
}
export const Match = ({match}: MatchProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Card backgroundColor={'white'}>
            <CardHeader>
                <Heading size='md'>Football between {match?.first_team?.country || ''} and {match?.second_team?.country || ''}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{match.name}</Text>
            </CardBody>
            <CardFooter>
                <Button  onClick={onOpen}>View here</Button>
            </CardFooter>
        </Card>
        <MatchInfo game_day={match.game_day} match_description={match.description} match_name={match.name} isOpen={isOpen} onClose={onClose}/>
        </>
    )
}