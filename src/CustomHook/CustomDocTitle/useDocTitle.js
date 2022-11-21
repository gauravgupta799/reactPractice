import {useEffect} from 'react'

const useDocTitle = (count) => {
    useEffect(() => {
        document.title = `Title Count ${count}`
    },[count])

}

export default useDocTitle