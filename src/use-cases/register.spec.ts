import { expect, test, describe, it } from 'vitest'
import { RegisterUseCase } from './register.js'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository.js'
import { userAlreadyExistsError } from './errors/user_already_exists.js'



// Unit testing

describe('Register Use Case', () => {
    it('should hash user password upon registration', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const { user } = await registerUseCase.execute({
            name: 'teste',
            email: 'teste',
            password: 'teste'
        })

        const isPasswordCorrectlyHashed = await compare(
            '123456',
            user.password_hash
        )

        expect(isPasswordCorrectlyHashed).toBe(true)

    })

    it('should not be able to register with same email twice', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const email = 'teste@email.com'

        await registerUseCase.execute({
            name: 'teste',
            email,
            password: 'teste'
        })

        expect(() =>
            registerUseCase.execute({
                name: 'teste',
                email,
                password: 'teste'
            }),
        ).rejects.toBeInstanceOf(userAlreadyExistsError) // tomara que de erro e que seja instanciado pelo user already exists error





    })

    it('should be able to register', async () => {
        const usersRepository = new InMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const { user } = await registerUseCase.execute({
            name: 'teste',
            email: 'teste',
            password: 'teste'
        })

        expect(user.id).toEqual(expect.any(String))

    })
})


test('check if it works', () => {
    expect(2 + 2).toBe(4)
})

