### As 6 restrições para ser RESTful

#### 1 - Interface uniforme (  _Uniform Interface_ )

Definir e seguir um padrão para manter consistência.
Inclui o **endpoint** , o uso dos **verbos HTTP**  e o **tipo de retorno**.

##### Recursos e coleções (endpoints)
A informação buscada no endpoint deve ser facilmente identificada.
Ex: swapi.dev/api/planets/:id

##### Ações/Verbos
As tabelas abaixo relacionam cada verbo com sua ação em caso de coleções ou recursos:

<img src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/architecture/rest/images/REST-collection-requests-112a76d24130c658fed1e68c8e99ecdd.png" alt="Verbos HTTP e ações em coleções REST"/>

<img src="https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/architecture/rest/images/REST-resource-requests-32666fb35463a819c19b730740e48b2c.png" alt="Verbos HTTP e ações em coleções REST"/>

##### Respostas (tipos de retorno)

-   1xx: Informação;
    
-   2xx: Sucesso;
    
-   3xx: Redirecionamento;
    
-   4xx: Erro do cliente;
    
-   5xx: Erro no servidor.

Existe [uma lista](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) completa e detalhada sobre códigos de status HTTP disponibilizada pela Mozilla.

#### 2 - Arquitetura cliente-servidor

Não importa quem é nosso cliente, as nossas APIs têm que conseguir retornar dados para ele. O cliente pode ser um app mobile, web, tv, arduíno etc.

#### 3 - Sem estado (  _Stateless_ )

Não manter estado significa que **toda requisição deve conter todas as informações necessárias (ser autossuficiente) para nossa API realizar uma ação** . Desse jeito, não podemos reutilizar nenhum contexto que está armazenado no servidor (uma variável, por exemplo).

#### 4 -  _Cacheable_

O princípio aqui é que **as respostas dadas pela nossa API devem dizer, explicitamente, se podem ou não ser cacheadas e por quanto tempo** . Com isso, evita-se que clientes forneçam respostas "velhas" ou inapropriadas.
No HTTP, o cache é definido pelo header `Cache-Control: max-age=120` . Significa que o cliente terá o recurso enviado por 120 segundos.

#### 5 - Sistema em camadas (  _Layered System_ )

Esse princípio é sobre **abstrair do cliente as camadas necessárias para responder a uma requisição** .
Quem consome a API não só precisa receber a resposta esperada.

#### 6 - Código sob demanda (  _Code on Demand_ )

Esse princípio consiste em dar a possibilidade de o nosso servidor enviar código (JavaScript, por exemplo) ao nosso cliente, onde será executado.
Você não precisa implementar código sob demanda para ser RESTful, logo esse item é considerado opcional.