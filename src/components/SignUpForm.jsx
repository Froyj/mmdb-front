import { useForm } from "react-hook-form";

function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("sex")}>
          <option value="madame">Madame</option>
          <option value="mister">Monsieur</option>
        </select><br />
        <label htmlFor="firstname">
          Prénom :<br />
          <input type="text" {...register("firstname")} />
        </label>
        <br />
        <label htmlFor="lastname">
          Nom :<br />
          <input type="text" {...register("lastname")} />
        </label>
        <br />
        <label htmlFor="dateOfBirth">
          Date de naissance :<br />
          <input type="date" {...register("dateOfBirth")} />
        </label>
        <br />
        <label htmlFor="email">
          Email :<br />
          <input type="email" {...register("email")} />
        </label>
        <br />
        <label htmlFor="address">
          Vos coordonnées :<br />
          <input type="textarea" placeholder="Adresse" {...register("adress")} /><br />
          <input type="text" placeholder="Code postal"{...register("adress")} /><br />
          <input type="text" placeholder="Ville"{...register("adress")} /><br />
          <input type="tel" placeholder="Téléphone"{...register("adress")} /><br />
        </label>
        <br />
        <label htmlFor="password">
          Mot de passe :<br />
          <input type="password" {...register("password")} />
        </label>
        <br />
        <label htmlFor="confirmPassword">
          Confirmer le mot de passe :<br />
          <input type="password" {...register("confirmPassword")} />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default SignUpForm;
