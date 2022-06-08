Cenário 1: Usuário Loga na Aplicação com dados Válidos
Dado que o usuário esteja na tela de login 
Quando o mesmo inserir o "email " e a "Senha" válidos
E marcar a caixa "não sou um robô"
Então deverá ser possível logar na aplicação 


Cenário 2: Usuário Tenta logar na aplicação com dados Inválidos
Dado que o usuário esteja na tela de login 
Quando o mesmo inserir um "email " ou "Senha" Inválidos
Então a aplicação deverá enviar uma mensagem " Login e/ou senha inválidos" e não será possível logar na aplicação 