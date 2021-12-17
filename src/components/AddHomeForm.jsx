import { useForm } from "react-hook-form";

function AddHomeForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <div>
      <h1>Ajouter une nouvelle maison à la location</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="newHouse">
          Nom de la maison :<br />
          <input type="text" {...register("newHouse")}/>
        </label>
        <br />
        <label htmlFor="city">
          Ville :<br />
          <input
            type="text"
            {...register("city")}
          />
        </label>
        <br />
        <label htmlFor="region">
          Région :<br />
          <input
            type="text"
            {...register("region")}
          />
        </label>
        <br />
        <label htmlFor="travellersNumber">
          Nombre de voyageurs :<br />
          <input
            type="number"
            {...register("travellersNumber")}
          />
        </label>
        <br />
        <label htmlFor="roomsNumber">
          Nombre de chambres :<br />
          <input
            type="number"
            {...register("roomsNumber")}
          />
        </label>
        <br />
        <label htmlFor="bedsNumber">
          Nombre de lits :<br />
          <input
            type="number"
            {...register("bedsNumber")}
          />
        </label>
        <br />
        <label htmlFor="pictures">
          Ajouter des photos :<br />
          <input
            type="file"
            {...register("pictures")}
          />
        </label>
        <br />
        <label htmlFor="shortDescription">
          Description courte :<br />
          <input
            type="textarea"
            {...register("shortDescription")}
          />
        </label>
        <br />
        <label htmlFor="longDescription">
          Description longue :<br />
          <input
            type="textarea"
            {...register("longDescription")}
          />
        </label>
        <br />
        <label htmlFor="activitiesAround">
          Activités :<br />
          <input
            type="textarea"
            {...register("activitiesAround")}
          />
        </label>
        <br />
        <label htmlFor="address">
          Adresse :<br />
          <input
            type="textarea"
            {...register("address")}
          />
        </label>
        <br />
        <label htmlFor="rulesAndRegulations">
          Règlement intérieur :<br />
          <input
            type="textarea"
            {...register("rulesAndRegulations")}
          />
        </label>
        <br />
        <label htmlFor="cancellationPolicies">
          Conditions d'annulation :<br />
          <input
            type="textarea"
            {...register("cancellationPolicies")}
          />
        </label>
        <br />
        <label htmlFor="pricePerNight">
          Prix/nuit :<br />
          <input
            type="text"
            {...register("pricePerNight")}
          />
        </label>
        <br />
        <label htmlFor="availability">
          Disponibilités à la location :<br />
          <input
            type="date"
            {...register("availability")}
          />
        </label>
        <br />
        <label htmlFor="equipments">
          Renseigner les équipements :<br />
          <select {...register("equipments")}>
            <option value="Bathroom">Salle de bain</option>
            <option value="KitchenAndDiningRoom">
              Cuisine et salle à manger
            </option>
            <option value="Room">Chambre</option>
            <option value="Entertainments">Divertissements</option>
            <option value="Family">Famille</option>
            <option value="HeatingAndAirConditioning">
              Chauffage et climatisation
            </option>
            <option value="SecurityAtHome">Sécurité à la maison</option>
            <option value="InternetAndDesk">Internet et bureau</option>
            <option value="Outside">Extérieur</option>
            <option value="ParkingAndFacilities">Extérieur</option>
          </select>
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddHomeForm;
