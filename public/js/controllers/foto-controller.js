// não pode usar o segundo parâmetro (dependências) porque senão cria um novo módulo
angular.module('alurapic').controller('FotoController', function($scope){
    $scope.foto = {};
    
    $scope.submeter = function(){
        console.log($scope.foto);
    };
    
});