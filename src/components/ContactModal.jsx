import { useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import colors from './styled-components/theme/colors';
import FilledButton from './common/buttons/FilledButton';
import ModalContext from '../contexts/modal';

const ContactModal = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      style={{
        content: {
          fontFamily: 'Trebuchet MS',
          width: '70%',
          textAlign: 'center',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          opacity: '1',
        },
      }}
    >
      <ModalTitle> Contacter l'équipe de Ma Maison des Bois </ModalTitle>
      <ModalText> Par téléphone : 06 20 90 78 27 </ModalText>
      <ModalText>
        {' '}
        Par e-mail : cliquez{' '}
        <a href='mailto:mamaisondesbois@gmail.com'> ici </a>
      </ModalText>
      <FilledButton
        type='button'
        onClick={() => setOpenModal(false)}
        margin='2rem 0'
      >
        {' '}
        Fermer{' '}
      </FilledButton>
    </Modal>
  );
};

export default ContactModal;

const ModalTitle = styled.h1`
  color: ${colors.green};
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const ModalText = styled.p`
  font-size: 1rem;
  font-weight: 100;

  a {
    text-decoration: none;
    color: ${colors.green};
  }
`;
