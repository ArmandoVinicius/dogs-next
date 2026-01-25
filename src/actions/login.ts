'use server'

import { cookies } from 'next/headers'

export default async function login(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null
  const password = formData.get('password') as string | null

  try {    
    if (!username || !password) throw new Error('Preencha todos os campos!');

    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        body: formData,
      },
    )

    if (!response.ok) throw new Error('Usuário ou senha inválidos!')

    const data = await response.json()
    cookies().set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    })

    return {
      data: null, ok: true, error: ''
    }

  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        data: null, ok: false, error: error.message
      }
    } else {
      return {
        data: null, ok: false, error: 'Erro desconhecido'
      }
    }
  }
}
