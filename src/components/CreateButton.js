import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateButton({
  children,
  url = '/',
  styles = {},
  buttonText = 'Create',
  buttonIcon = null,
}) {
  return (
    <div style={{ marginBottom: 30, ...styles }}>
      <Link to={url} >
        <Button icon={buttonIcon} type='primary' size='large'>{buttonText}</Button>
      </Link>
      {children && (
        <div style={{ marginTop: 30, ...styles }}>
          {children}
        </div>
      )}
    </div>
  )
}
