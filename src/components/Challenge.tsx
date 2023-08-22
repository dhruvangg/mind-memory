import { FC, useState } from "react";
import { useNumber } from "../context/NumberContext";

interface Props {
    reStart: (arg0: boolean) => void;
}

const Challenge: FC<Props> = ({ reStart }) => {
    const [answer, setAnswer] = useState<string>('')
    const { number, level, levelUp, resetLevel } = useNumber()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if((parseInt(answer) === number)){
            alert(`Congrats! Level up to ${level + 1}`)
            reStart(true)
            levelUp()
        } else {
            resetLevel()
            alert('Ahh! You missed it.')
        }
    }
    return <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-8">
            <input
                type="number"
                className="bg-slate-900/75 rounded-md text-white focus:outline-none p-4 w-full font-bold text-2xl tracking-widest text-center"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />
        </div>
        <div className="flex justify-between">
            <button type="button" className="flex items-center" onClick={() => reStart(true)}>
                <span>New &nbsp;</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clipRule="evenodd" />
                </svg>
            </button>
            <button className="flex items-center">
                <span>Check &nbsp;</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </form>
}

export default Challenge;