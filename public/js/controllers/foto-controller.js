// não pode usar o segundo parâmetro (dependências) porque senão cria um novo módulo
angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {};
    $scope.mensagem = '';

    // verifica se passou pelas validações antes de salvar
    $scope.submeter = function(){        
        if ($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto)
                .success(function(){
                $scope.mensagem = 'Foto cadastrada com sucesso';
                $scope.foto = {};
            })
                .error(function(erro){
                $scope.mensagem = 'Ocorreu um erro ao cadastrar a foto';
            });
        }
    };
});