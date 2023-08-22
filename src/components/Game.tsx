import React, { FC } from 'react';
import Number from './Number';
import Challenge from './Challenge';
import { useNumber } from '../context/NumberContext';

const Game: FC = () => {
    const { level } =useNumber()
    const [ask, setAsk] = React.useState<boolean>(true)
    React.useEffect(() => {

        if (ask) {
            const timeoutId = setTimeout(() => {
                setAsk(prevAsk => !prevAsk);
            }, 3000);

            return () => {
                clearTimeout(timeoutId);
            };
        }

    }, [ask]);

    return (
        <div className='w-96 mx-auto bg-black p-4 rounded-md h-36 flex justify-center items-center relative overflow-hidden'>
            <div className='flex'>
                {ask ? <Number /> : <Challenge reStart={setAsk} />}
            </div>
            <div className='fixed bottom-0 p-4'>Level {level}</div>
        </div>
    )
}

export default Game;