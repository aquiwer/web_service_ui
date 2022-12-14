
import { Stack, Input, Button, Textarea, PinInput, PinInputField, Text } from '@chakra-ui/react'
import classNames from 'classnames'
import { MouseEvent, useState } from 'react';
import { useAddClubMutation } from '../app/api/Match.api';
import { Match } from '../app/interfaces/Match.interface';
import { PickDay } from '../components/PickDay';

import './styles/styles.scss'

export const AddMatch = () => {

    const [addClub] = useAddClubMutation();


    const [needSelectDate, setNeedSelectDate] = useState<boolean>(false);

    const [matchState, setMatchState] = useState<Match>({} as Match);
    const [team, setTeam] = useState({
        first_team: {
            score: 0,
            country: ''
        },
        second_team: {
            score: 0,
            country: ''
        }
    })
    const [dates, setDates] = useState<Date | undefined>(new Date())

    const onFillFieldHandler = (field: string, value: string) => {
        setMatchState((prev) => ({ ...prev, [field]: value }))
    }

    const onFillTeamFieldHandler = (score: number = 0, team_country: string = '', team: string = '') => {
        if(team === 'first-team'){
            setTeam(prevState => ({...prevState, first_team: {
                score,
                country: team_country
            }}))
        }else{
            setTeam(prevState => ({...prevState, second_team: {
                score,
                country: team_country
            }}))
        }
    }
    
    const onAddMatchHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addClub({
            name: matchState.name,
            description: matchState.description,
            game_day: dates as any,
            first_team: team.first_team,
            second_team: team.second_team,
            result: matchState.result

        } as Match)
    }
    return (
        <main className={classNames('amp-wrapper')}>
            <form className={classNames('amp-form')}>
                <Stack spacing={3}>
                    <Input onChange={e => onFillFieldHandler('name', e.currentTarget.value)} textColor={'white'} placeholder='Match name' size='md' required />
                    <Input onChange={e => onFillFieldHandler('result', e.currentTarget.value)} textColor={'white'} placeholder='Which team won?' size='md' required />
                    {
                        needSelectDate ? <PickDay setDates={setDates} dates={dates} setNeedSelectDate={setNeedSelectDate} /> : <Button onClick={() => setNeedSelectDate(true)}>Open day picker</Button>
                    }
                    <Input onChange={e => onFillTeamFieldHandler(team.first_team.score, e.currentTarget.value, 'first-team')} textColor={'white'} placeholder='First team' size='md' required />
                    <PinInput>
                        <Text textColor={'white'} size='md'>Score of first team</Text>
                        <PinInputField  onChange={e => onFillTeamFieldHandler(+e.currentTarget.value, team.first_team.country, 'first-team')} textColor={'white'} />
                    </PinInput>
                    <Input  onChange={e => onFillTeamFieldHandler(team.second_team.score, e.currentTarget.value, 'second-team')} textColor={'white'} placeholder='Second team' size='md' required />
                    <PinInput>
                        <Text textColor={'white'} size='md'>Score of second team</Text>
                        <PinInputField onChange={e => onFillTeamFieldHandler(+e.currentTarget.value, team.second_team.country, 'second-team')} textColor={'white'} />
                    </PinInput>
                    <Textarea onChange={e => onFillFieldHandler('description', e.currentTarget.value)} textColor={'white'} placeholder='What do u think about this match?' />
                    <Button onClick={(e) => onAddMatchHandler(e)}>Add match</Button>
                </Stack>
            </form>
        </main>
    )
}