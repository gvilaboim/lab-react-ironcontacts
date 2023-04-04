import React from 'react'

const ContactsCard = (props) => {
    console.log(props)
  
  return (
    <tr key={props.contact.id} name={props.contact.name}>
      <td> <img alt="lol" width ="10%" src={props.contact.pictureUrl}/> </td>
      <td>{props.contact.name}</td>
      <td>{props.contact.popularity}</td>
      <td>{props.contact.wonOscar ? "🏆" : " "} </td>
      <td>{props.contact.wonEmmy ? "🏆" : " "} </td>
      <td>
        <button className='delete' onClick={() => props.deleteContact(props.contact.id)}>	Delete </button></td>
    </tr>

    )
}

export default ContactsCard