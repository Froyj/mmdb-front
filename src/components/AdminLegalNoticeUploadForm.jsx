import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../helper/axios-config';
import AdminSection from './common/containers/AdminSection';


const AdminLegalNoticeUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  
  
  const handleSubmit = async (e, file) => {
    try {
      e.preventDefault();
      console.log(selectedFile);
      const formData = new FormData();
      formData.append('file', file);
      console.log(formData);
      await axios.post('/upload/legal-notice', formData)
      toast.success('Mentions légales mises à jour')
    } catch {
      toast.error('Problème lors de la mise à jour des mentions légales')
    }
  }

  return (
    <AdminSection>
      <h2>Mise à jour des mentions légales </h2>
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
