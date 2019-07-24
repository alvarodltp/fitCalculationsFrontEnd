import React from 'react'

const Contact = () => {
  return(
  <div>
    <form action="https://formspree.io/fitcalculations@gmail.com" method="POST">
      <input type="text" name="name"/>
      <input type="email" name="_replyto"/>
      <input type="submit" value="Send"/>
    </form>
  </div>
  )
}

export default Contact
