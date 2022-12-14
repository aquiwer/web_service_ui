import {SimpleGrid, Input} from '@chakra-ui/react'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { useFetchAllClubsQuery, useFindMatchQuery } from '../../app/api/Match.api'
import { RootState } from '../../app/store'
import useDebounce from '../../app/utils/hooks/useDebaunce';
import { Match } from './Match'

import './styles/style.scss'

export const Matches = () => {

    const {refetch: refetchAllClub} = useFetchAllClubsQuery('matchApi' as any);
    const [specifiedMatch, setSpecifiedMatch] = useState<string>('');

    const debouncedValue = useDebounce<string>(specifiedMatch, 500);

    const {matches} = useSelector((state: RootState) => state.match_state);
    
    const {refetch: refetchFindMatch} = useFindMatchQuery(debouncedValue)

    useEffect(() => {
        refetchFindMatch()

        if(!debouncedValue.trim().length){
            refetchAllClub()
        }
    }, [debouncedValue])

    useEffect(() => {
        refetchFindMatch()
    }, [])
    return (
        <main className={classNames('matches-wrapper')}>
            <Input width={400} onChange={e => setSpecifiedMatch(e.currentTarget.value)} marginBottom={'50px'} placeholder='Find match'/>
            <SimpleGrid padding={'0 50px 0 50px'} display={'flex'} flexWrap='wrap' justifyContent={'center'} gap={10}>
                {
                    matches.map((match, index) => <Match match={match} key={index}/>)
                }
            </SimpleGrid>
        </main>
    )
}