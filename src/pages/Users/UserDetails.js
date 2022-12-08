import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
  BookOutlined
} from '@ant-design/icons';
import UsersList from '../../components/Users/UsersList';
import { fetchDocumentsByUserId } from '../../services/documents';
import { fetchUserById } from '../../services/users';
import DocumentsList from '../../components/Documents/DocumentsList';
import CreateButton from '../../components/CreateButton';
import { ROUTES } from '../../router';

const initialstate = {
  _id: "638f50b612fdcc59f8ccb19c",
  name: "Alisher Musurmonov",
  dateOfBirth: "2010-02-25T00:00:00.000Z",
  country: "England",
  language: "de",
  createdAt: "2022-12-06T14:24:54.296Z",
  updatedAt: "2022-12-07T07:34:21.440Z",
}
export default function UserDetails() {
  const [user, setUser] = useState(initialstate);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [docsLoading, setDocsLoading] = useState(false);
  const { id } = useParams();

  const handleFetch = async () => {
    try {
      setLoading(true);
      const users = await fetchUserById(id);
      setUser(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }
  }

  const handleDocumentFetch = async () => {
    try {
      setDocsLoading(true);
      const documents = await fetchDocumentsByUserId(id);
      setDocuments(documents);
      setDocsLoading(false);
    } catch (error) {
      setDocsLoading(false);
      message.error(error.message);
    }
  }

  useEffect(() => {
    handleFetch();
  }, [id]);

  useEffect(() => {
    handleDocumentFetch();
  }, [user._id])

  return (
    <div>
      <div>
        <h2>Author details</h2>
        <UsersList data={[user]} loading={loading} />
      </div>
      <div>
        {documents.length && (
          <>
            <h3>Documents</h3>
            <CreateButton
              url={ROUTES.CREATE_DOCUMENT}
              buttonText="Create document"
              buttonIcon={<BookOutlined />}
              styles={{ textAlign: 'right' }}
            />
            <DocumentsList data={documents} loading={docsLoading} />
          </>
        )}

      </div>
    </div>
  )
}
