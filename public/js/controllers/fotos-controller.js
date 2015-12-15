// public/js/controllers/fotos-controller.js

// $scope - injeção de dependência
// com isso é possível enviar para fora da function os valores
// O Angular sabe o que deve buscar de sua infraestrutura de acordo com o nome do parâmetro que recebemos em nosso controller

angular.module('alurapic').controller('FotosController', function($scope){
   $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
});