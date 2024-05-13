import { useAuthContext } from "../../hooks/useAuthContext"

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
        <p>To generate the Apple Calendar, please email yourself the downloaded file into the Mail App. 
            Using any email client other than the Mail App will not work. Afterwords, simply click on the attachment and it will be added to your calendar.
        </p>
         <button onClick={handleButton}>Generate Apple Calendar</button>
    </div>
  )
}

export default ICalendarGenerator
