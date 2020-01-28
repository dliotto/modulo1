# modulo1

#Primeira aula, criando projeto do modulo 1.

##########Expressões utilizadas para capturar nas rotas###########

Ex: 
//query params = ?teste=1

//route params = /users/1

//request body = { "nome" : "Douglas", "data_nas" : "25/01/1992" } 

#Após criar os metodos de CRUD, você pode criar os middlewares. 
#No qual básicamente interceptam o que é enviado nos metodos do CRUD que são as váriaveis de paramentro req e res
#middlewares podem alterar as váriaveis req e ras, mais a váriavel req, que você pode setar um valor para este array
