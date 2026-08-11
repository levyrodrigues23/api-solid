# App

Gympass style app

## RFs
- [ ] Deve ser possível se cadastrar.
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível obter o número de checkins realizados pelo usuário logado
- [ ] Deve ser possível o usuário obter seu histórico de check-ins
- [ ] Deve ser possível o usuário buscar academias próximas
- [ ] Deve ser possível o usuário buscar academias pelo nome
- [ ] Deve ser possível o usuário realizar checking em uma academia
- [ ] Deve ser possível validar o check-in de um usuário
- [ ] Deve ser possível cadastrar uma academia


## RNs

- [ ] O usuário não deve poder se cadastrar com um email duplicado
- [ ] O usuário nao pode fazer 2 checkins no mesmo dia
- [ ] O usuário nao pode fazer chekin se não estiver perto da academia (uns 100 metros)
- [ ] O check-in so pode ser validado por administradores
- [ ] A academia so pode ser cadastrada por administradores 

## RNFs

- [ ] A senha do usuário precisa estar criptografada
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreeSQL
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página 
- [ ] O usuário deve ser identificado por um jwt (json web token)