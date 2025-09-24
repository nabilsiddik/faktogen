'use server'

export const createAccont = async(formData: FormData) => {
    const userData = Object.fromEntries(formData.entries())

    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    })

}