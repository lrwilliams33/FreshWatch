const {ICalCalendar} = require('ical-generator')
const fetch = require('node-fetch')
const authenticateUser = require('../middleware/requireAuth')

const getICalendar = async (req, res) => {
    authenticateUser(req, res, async () => {
        const response = await fetch ('http://localhost:4000/api/items', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${req.token}`
            }
        })
        if (!response.ok){
            throw Error('Failed to fetch items')
        }
        const items = await response.json()
        const iCalendar = new ICalCalendar()
        iCalendar.name = 'Item Expiration Dates'
        items.forEach(item =>{
            const{title, expirationDate} = item
            iCalendar.createEvent(
                {
                    start: expirationDate,
                    end: expirationDate,
                    summary: title,
                    description: `Your ${title} will expire on ${expirationDate}`
                }
            )
        })
        try{
            res.type('text/calendar')
            res.send(iCalendar.toString())
        }
        catch(err){
            console.log(err)
            res.status(500).send('Internal server error')
        }
    })

}
module.exports = {getICalendar}