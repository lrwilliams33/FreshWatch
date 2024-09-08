import { useAuthContext } from "../../hooks/useAuthContext"
import './ICalendarGenerator.css'

const ICalendarGenerator = () => {
  const {user} = useAuthContext()
  const handleButton = async () => {
    try{
        const response = await fetch('/api/iCalendar', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        if (!response.ok){
            throw Error('Failed to generate iCalendar')
        }
        console.log('success')
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'expiration_dates.ics')
        document.body.appendChild(link)
        link.click()
    }
    catch(err){
        console.log(err)
    }
  }
  return (
    <div>
         <button onClick={handleButton} id="iCalButton">Generate Apple Calendar</button>
    </div>
  )
}

export default ICalendarGenerator
