import React, { useState } from 'react'
import UsersList from '../components/UsersList/UsersList'

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div>
      <UsersList data={[]} loading={loading} />
    </div>
  )
}
