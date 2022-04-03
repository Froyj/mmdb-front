import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../helper/axios-config';
import colors from '../../components/styled-components/theme/colors';
import { updateHouse } from '../../api/houses';
import AdminHouseImageUploadForm from '../../components/admin/Home/AdminHouseImageUploadForm';

function UpdateHouse() {
  const { register, handleSubmit, reset } = useForm();

  const { id } = useParams();

  const regex = /T00:00:00.000Z/i;

  useEffect(() => {
    axios
      .get(`/home_to_rent/${id}`)
      .then((res) => res.data)
      .then((houseInfos) => {
        reset({
          ...houseInfos,
          opening_disponibility: houseInfos.opening_disponibility.replace(
            regex,
            ''
          ),
          closing_disponibility: houseInfos.closing_disponibility.replace(
            regex,
            ''
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = async (data) => {
    const openingDate = document.getElementById('opening_disponibility').value;
    const closingDate = document.getElementById('closing_disponibility').value;

    updateHouse({ data, id, openingDate, closingDate })
      .then(() => toast.success('Maison modifiée !'))
      .catch((error) => {
        console.log(error);
        toast.error('Problème lors de la modification de la maison');
      });
  };

  return (
    <>
      <FormContainer
        onSubmit={handleSubmit(handleUpdate)}
        enctype='multipart/form-data'
      >
        <h2>Informations de la maison</h2>
        <FormDiv>
          <HouseInfoDiv>
            <SimpleField
              type='text'
              name='name'
              placeholder='Nom de la maison'
              {...register('name')}
            />
            <SimpleField
              type='text'
              name='adress'
              placeholder='Adresse'
              {...register('adress')}
            />
            <SimpleField
              type='text'
              name='zipcode'
              placeholder='Code postal'
              {...register('zipcode')}
            />
            <SimpleField
              type='text'
              name='city'
              placeholder='Ville'
              {...register('city')}
            />
            <SimpleField
              type='text'
              name='country'
              placeholder='Région'
              {...register('country')}
            />
            <SimpleField
              type='text'
              name='coordinate_long'
              placeholder='Longitude (optionnel)'
              {...register('coordinate_long', { valueAsNumber: true })}
            />
            <SimpleField
              type='text'
              name='coordinate_lat'
              placeholder='Latitude (optionnel)'
              {...register('coordinate_lat', { valueAsNumber: true })}
            />
            <SimpleField
              type='number'
              name='square_meter'
              placeholder='Mètres carrés (optionnel)'
              {...register('square_meter', { valueAsNumber: true })}
            />
            <LargeField
              name='describe_short'
              placeholder='Description courte'
              {...register('describe_short')}
            />
            <LargeField
              name='describe_long'
              placeholder='Description détaillée'
              {...register('describe_long')}
            />
          </HouseInfoDiv>

          <HouseDescriptionDiv>
            <SimpleField
              type='number'
              name='capacity'
              placeholder="Capacité d'accueil"
              {...register('capacity', {
                valueAsNumber: true,
              })}
            />
            <SimpleField
              type='number'
              name='price_by_night'
              placeholder='Prix par nuit'
              {...register('price_by_night', {
                valueAsNumber: true,
              })}
            />
            <DateDiv>
              <p> Début de disponibilité à la location </p>
              <SimpleField
                type='date'
                name='opening_disponibility'
                id='opening_disponibility'
                placeholder='Début de disponibilité à la location'
                {...register('opening_disponibility', {
                  valueAsDate: true,
                })}
              />
            </DateDiv>
            <DateDiv>
              <p>Fin de disponibilité à la location</p>
              <SimpleField
                type='date'
                name='closing_disponibility'
                id='closing_disponibility'
                placeholder='Fin de disponibilité à la location'
                {...register('closing_disponibility', {
                  valueAsDate: true,
                })}
              />
            </DateDiv>
            <MiddleField
              name='renting_conditions.partial'
              placeholder='Conditions de remboursement partiel'
              {...register('renting_conditions.partial')}
            />
            <p className='indication'>
              Exemple : "Annulation jusqu'à une semaine avant le début de la
              réservation : remboursement de 70% du montant de la réservation"{' '}
            </p>
            <MiddleField
              name='renting_conditions.total'
              placeholder='Conditions de remboursement total'
              {...register('renting_conditions.total')}
            />
            <p className='indication'>
              Exemple : "Annulation au moins 3 semaines avant le début de la
              réservation : remboursement de 100% du montant de la réservation"{' '}
            </p>
            <SimpleField
              type='number'
              name='caution'
              placeholder='Caution (optionnel)'
              {...register('caution', { valueAsNumber: true })}
            />

            <CheckboxDiv>
              <p>Evènements autorisés</p>
              <label htmlFor='event.public'>
                <input type='hidden' name='event.public' value='false' />
                <input
                  type='checkbox'
                  id='event.public'
                  name='event.public'
                  value='true'
                  {...register('event.public')}
                />
                Public
              </label>

              <label htmlFor='event.private'>
                <input type='hidden' name='event.private' value='false' />
                <input
                  type='checkbox'
                  id='event.private'
                  name='event.private'
                  value='true'
                  {...register('event.private')}
                />
                Privé
              </label>

              <label htmlFor='event.professionnal'>
                <input type='hidden' name='event.professionnal' value='false' />
                <input
                  type='checkbox'
                  id='event.professionnal'
                  name='event.professionnal'
                  value='true'
                  {...register('event.professionnal')}
                />
                Professionnel
              </label>
            </CheckboxDiv>

            <HourDiv>
              <DateDiv>
                <p>Heure d'arrivée</p>
                <SimpleField
                  type='time'
                  name='arrival_hour'
                  {...register('arrival_hour')}
                />
              </DateDiv>
              <DateDiv>
                <p>Heure de départ</p>
                <SimpleField
                  type='time'
                  name='departure_hour'
                  {...register('departure_hour')}
                />
              </DateDiv>
            </HourDiv>

            <CheckboxDiv>
              <p>Fumeurs autorisés</p>
              <label htmlFor='is_smoker-true'>
                <input
                  type='radio'
                  value={1}
                  {...register('is_smoker', { valueAsNumber: true })}
                />
                Oui
              </label>
              <label htmlFor='is_smoker-false'>
                <input
                  type='radio'
                  value={0}
                  {...register('is_smoker', { valueAsNumber: true })}
                />
                Non
              </label>
            </CheckboxDiv>
          </HouseDescriptionDiv>
        </FormDiv>
        )
        <SubmitDiv>
          <Submit type='submit' value='Valider' />
          <NavLink to='/admin/dashboard'>
            <FilledButton onClick={() => {}}>Retour en arrière</FilledButton>
          </NavLink>
        </SubmitDiv>
        <h2>Photos</h2>
      </FormContainer>
      <AdminHouseImageUploadForm />
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;

  h2 {
    margin: 2em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const FormDiv = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const HouseInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const HouseDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  p {
    color: ${colors.blue};
    margin-left: 1rem;
  }

  .indication {
    font-size: 0.8rem;
    font-style: italic;
    color: grey;
    margin-left: 1rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const DateDiv = styled.div`
  display: flex;
  width: auto;
  margin: 0 0.6rem;
  align-items: center;
  justify-content: flex-start;
  width: 80%;

  p {
    width: 70%;
    text-align: left;
  }

  input {
    width: 30%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
const CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  border: solid 3px ${colors.yellow};
  border-radius: 30px;
  width: 89.5%;

  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  label {
    margin-left: 1rem;
  }

  input {
    margin-right: 1rem;
  }
`;
const HourDiv = styled.div`
  display: flex;
  margin: 0.6rem 0;
  width: 100%;

  p {
    width: 55%;
  }

  input {
    width: 45%;
  }
`;

const SubmitDiv = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  justify-content: flex-end;
  margin-top: 2rem;
`;
const SimpleField = styled.input`
  display: flex;
  width: 90%;
  height: 3rem;
  margin: 0.6rem;
  padding: 0rem 1rem;
  border: solid 3px ${colors.yellow};
  border-radius: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: ${colors.blue};
  font-weight: 100;
  font-size: 1rem;

  ::placeholder {
    font-size: 0.8rem;
  }
`;
const MiddleField = styled.textarea`
  display: flex;
  width: 90%;
  height: 3rem;
  margin: 0.6rem;
  padding: 0.5rem 1rem;
  border: solid 3px ${colors.yellow};
  border-radius: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: ${colors.blue};
  font-weight: 100;

  ::placeholder {
    font-size: 0.8rem;
  }
`;
const LargeField = styled.textarea`
  display: flex;
  width: 90%;
  height: 6rem;
  margin: 0.6rem;
  padding: 0.5rem 1rem;
  border: solid 3px ${colors.yellow};
  border-radius: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  color: ${colors.blue};
  font-weight: 100;

  ::placeholder {
    font-size: 0.8rem;
  }
`;

const Submit = styled.input`
  border: none;
  border-radius: 6px;
  background-color: ${colors.blue};
  padding: 0.6rem 2.5rem;
  margin: 0.5rem;
  color: white;

  &:hover {
    transform: scale(1.06);
    transition: all 0.1s ease-in-out;
  }
`;

const FilledButton = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${colors.blue};
  padding: 0.6rem 2.5rem;
  margin: auto;
  color: white;
  width: 250px;
  height: auto;

  &:hover {
    transform: scale(1.06);
    transition: all 0.1s ease-in-out;
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 15px;
  }
`;

export default UpdateHouse;
