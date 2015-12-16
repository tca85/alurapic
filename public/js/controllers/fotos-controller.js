// public/js/controllers/fotos-controller.js

// $scope - injeção de dependência
// com isso é possível enviar para fora da function os valores
// O Angular sabe o que deve buscar de sua infraestrutura 
// de acordo com o nome do parâmetro que recebemos em nosso controller
// $http - executa funções http

angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];

    // Toda requisição assíncrona é incerta, não sabemos quanto tempo 
    // ela demorará para ser executada e se realmente será bem sucedida.
    // $http.get nos retorna uma promessa de que ele buscará os dados
    // na requisição: http://localhost:3000/v1/fotos

    var promise = $http.get('/v1/fotos');

    // quando a "promessa" for cumprida, podemos ter acesso aos dados
    // retornados do servidor:
    promise.then(function(retorno){
        $scope.fotos = retorno.data;        
    }).catch(function(erro){
        console.log(erro);
    })
    
});