import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const weekday = weekdays[now.getDay()]
  const month = months[now.getMonth()]
  const day = now.getDate()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const isPm = now.getHours() >= 12
  const hour = now.getHours() % 12 || 12
  const hour12 = hour.toString().padStart(2, "0")
  const meridiem = isPm ? 'PM' : 'AM'

  const formattedDateTime = `${weekday} ${month} ${day} ${hour12}:${minutes} ${meridiem}`

  return (
    <div>{formattedDateTime}</div>
  )
}

export default DateTime