import { useForm } from "react-hook-form";

const Test = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
      // eslint-disable-next-line no-console
    console.log(data);
  };

  register('test')
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>inscription</h1>
      <label htmlFor="name" >
        name
        <input type="text" name="name" id="name" {...register("text")} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Test;
