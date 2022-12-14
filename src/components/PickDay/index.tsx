import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import './styles/style.scss'
import 'react-day-picker/dist/style.css';

interface PickDayProps {
    setNeedSelectDate: (state: boolean) => void,
    setDates: (dates: Date | undefined) => void,
    dates: Date | undefined
}
export const PickDay = ({setNeedSelectDate, setDates, dates}: PickDayProps) => {

    return (
        <>
            <DayPicker
                fixedWeeks  
                mode='single'
                onSelect={setDates} 
                selected={dates}
                modifiersClassNames={{
                    selected: 'pd-selected'
                }}
            />
            <Button onClick={() => setNeedSelectDate(false)}>Close day picker</Button>
        </>
    )
}