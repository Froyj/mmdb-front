import { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axios from '../helper/axios-config';
import AdminSection from './common/containers/AdminSection';


const AdminLegalNoticeUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null)
  const fileIsPDF = (fileName) => fileName.split`.`[fileName.split`.`.length-1] === 'pdf'

  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  
  
  const handleSubmit = async (e, file) => {
    try {
      e.preventDefault();
      if (fileIsPDF(selectedFile.name)) {
        setError(null)
        const formData = new FormData();
        formData.append('file', file);
        await axios.post('/upload/legal-notice', formData)
        toast.success('Mentions légales mises à jour')
      } else {
        setError('Le fichier doit être au format PDF')
      }
    } catch {
      toast.error('Problème lors de la mise à jour des mentions légales')
    }
  }

  return (
    <AdminSection>
      <h2>Mise à jour des mentions légales </h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={(e) => handleSubmit(e, selectedFile)}>
        <label htmlFor='legal-notice-upload'>
          <input
            id='legal-notice-upload'
            type='file'
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Mettre à jour</button>
      </form>
    </AdminSection>
  );
};

export default AdminLegalNoticeUploadForm;

const ErrorMessage = styled.p`
color: red;
`