// public/js/controllers/fotos-controller.js

// $scope - inje��o de depend�ncia
// com isso � poss�vel enviar para fora da function os valores
// O Angular sabe o que deve buscar de sua infraestrutura de acordo com o nome do par�metro que recebemos em nosso controller

angular.module('alurapic').controller('FotosController', function($scope){
   $scope.foto = {
        titulo : 'Le�o',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };
});