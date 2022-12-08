import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import {
  BookOutlined,
} from '@ant-design/icons';
import CreateButton from '../../components/CreateButton';
import { ROUTES } from '../../router';
import DocumentsList from '../../components/Documents/DocumentsList';
import { fetchDocuments } from '../../services/documents';

export default function Documents() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const users = await fetchDocuments();
      setData(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }
  }
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <CreateButton
        url={ROUTES.CREATE_DOCUMENT}
        buttonText="Create Document"
        styles={{ textAlign: 'right' }}
        buttonIcon={<BookOutlined />}
      />
      <DocumentsList data={data} loading={loading} />
    </div>
  )
}
