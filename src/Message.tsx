import React from 'react'

interface MessageProps {
    id: number;
    message: string;
}

const Message = ({id, message}: MessageProps) => {
  return (
    <li key={id}>{message}</li>
  )
}

export default Message