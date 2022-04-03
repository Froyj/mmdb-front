import { useParams } from 'react-router';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import colors from '../../styled-components/theme/colors';
import { updateHouseImages } from '../../../api/houses';
import FilledButton from '../../common/buttons/FilledButton';

const AdminHouseImageUploadForm = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const handleImageUpload = async (data, e) => {
    e.preventDefault();

    const imgData = new FormData();
    const principalImg = data.main[0];
    const secondaryImg = data.secondary;

    if (data.main) {
      imgData.append('main', principalImg);
    }
    if (data.secondary) {
      for (let i = 0; i < secondaryImg.length; i += 1) {
        imgData.append('secondary', secondaryImg[i]);
      }
    }

    console.log(data);
    try {
      const images = await updateHouseImages(id, imgData);
      console.log(images);
    } catch (error) {
      console.log(error);
      toast.error('Erreur pendant la mise à jour des images');
    }
  };

  // updateHouseImages(imgData)
  //   .then((images) => {})
  //   .catch(toast.error('Erreur pendant la mise à jour des images'));

  return (
    <form onSubmit={handleSubmit(handleImageUpload)}>
      <ImagesDiv>
        <label htmlFor='main'>
          Image principale
          <input type='file' {...register('main')} />
        </label>
        <label htmlFor='secondary'>
          Image(s) secondaire(s)
          <input
            type='file'
            id='secondary'
            name='secondary'
            multiple
            {...register('secondary')}
          />
        </label>
      </ImagesDiv>
      <FilledButton type='submit'>Valider</FilledButton>
    </form>
  );
};

export default AdminHouseImageUploadForm;

const ImagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0.6rem;
  padding: 0rem 1rem;
  border: solid 3px ${colors.yellow};
  border-radius: 30px;
  width: 90%;
  height: 5rem;

  label {
    width: 80%;
    justify-content: flex-end;

    input {
      margin: 0 2rem;
    }
  }

  @media (max-width: 768px) {
    height: 10rem;
  }
`;
