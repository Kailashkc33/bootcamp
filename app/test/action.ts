'use server'

export async function sayHello(formData: FormData) {
  const name = formData.get('name')
  return { message: `Hello ${name}!` }
}

