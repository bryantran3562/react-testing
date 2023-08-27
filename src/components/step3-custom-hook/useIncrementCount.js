import { useState } from 'react'

export const useIncrementCount = () => {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    return [count, incrementCount]

}
