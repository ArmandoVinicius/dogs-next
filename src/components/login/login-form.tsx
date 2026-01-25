'use client';

import login from '@/actions/login'
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button'

function FormButton() {
  const {pending} = useFormStatus();
  return <>{pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Entrar</Button>}</>
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null
  });
  
  return (
    <>
      <form action={action}>
        <input name="username" type="text" placeholder="Usuário" />
        <input name="password" type="password" placeholder="Senha" />
        <FormButton />
        <p>{state.error}</p>
      </form>
    </>
  )
}
