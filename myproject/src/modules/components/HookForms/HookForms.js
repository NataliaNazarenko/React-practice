import { useForm } from 'react-hook-form';

const HookForms = () => {
    const {register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register('firstName')} />
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <p>Last name is required.</p>}
          <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>}
          <input type="submit" />
        </form>
      );
};

export default HookForms;