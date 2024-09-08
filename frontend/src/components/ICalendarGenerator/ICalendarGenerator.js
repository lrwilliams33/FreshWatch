import { useAuthContext } from "../../hooks/useAuthContext"
import { useState } from "react"
import './ICalendarGenerator.css'
import CalendarPopUp from "../calendarPopUp/calendarPopUp"

const ICalendarGenerator = () => {
  const {user} = useAuthContext()
    // calendar popup .............................
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };

  const handleButton = async () => {
    try{
        setOpen(true);
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
        <CalendarPopUp open={open} handleClose={handleClose}></CalendarPopUp>
    </div>
  )
}

export default ICalendarGenerator
