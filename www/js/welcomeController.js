angular.module('starter.welcomeController', ['ionic'])
/*
* Controller : WelcomeCtrl
* $ionicModal: Modulo para abilitar modal IONIC, exemplo : Login , Cadastro, Esqueci minha senha
* $timeout :  Modulo com metodos com temporizadores
* $state : Modulo utilizado na app para direcionar para paginas
* $ionicLoading : Modulo loading IONIC
* $ionicPopup : Modulo Popup IONIC (Alertas e Notificações)
*/
.controller('WelcomeCtrl', function($scope, $ionicModal, $timeout, $state, $ionicLoading, $ionicPopup) {

//********************************************* LOGIN  ***********************************************// 

// LOADING
	$scope.show = function() {
		$ionicLoading.show({
		template: 'Aguarde...',
		noBackdrop : false,
		hideOnStateChange : false,
		duration : '3000'
	
		});
	};
	// LOADING
	$scope.hide = function(){
		$ionicLoading.hide();
	};
  //ALERTA LOGIN
  $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Email ou Login incorretos',
     template: 'Tente Novamente',
	 delay : '4000',
   	 buttons: [
      	{text: '<b>Ok</b>',
        type: 'button-energized'}]
	 });
   alertPopup.then(function(res) {
     console.log('Obrigado por acessar');
   });
 };
   
  $scope.loginData = {};
  

  // CRIAR MODAL
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // FHECHAR MODAL
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // ABRIR MODAL
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
	if ($scope.loginData.username == 'admin' && $scope.loginData.password == 'admin')  
	
	$timeout(function() {
	  $scope.closeLogin();
	  $scope.show();
	  $state.go('app.vouchers', { 'index': 123, 'anotherKey': 'This is a test' });
  	}, 1500);

	
	else{
	$scope.show();	
	
	$timeout(function() {
		$scope.showAlert();
	}, 3000);
	
	}
/*    $timeout(function() {
      $scope.closeLogin();
    }, 1000);*/
	
  };
    
$scope.logout = function() {
	$state.go('welcome');
};
  
  
//********************************************* CADASTRO  ***********************************************// 
 
	$scope.cadastroData = {};

	$scope.showAlertCadastro = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Sua senha não é Segura',
		 template: 'Tente Novamente !',
		 delay : '4000',
		 buttons: [
      	{text: '<b>Ok</b>',
        type: 'button-energized'}]
	   });
	   alertPopup.then(function(res) {
		 console.log('Obrigado');
	   });
	};
	
	$scope.showAlertCadastroRealizado = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Cadastro Realizado com Êxito',
		 template: 'Lets Eat !!!!!',
		 delay : '4000',
	  	 buttons: [
      	{text: '<b>Ok</b>',
        type: 'button-energized'}]
	   });
	   alertPopup.then(function(res) {
		 console.log('Obrigado');
	   });
	};
 	
	
	$ionicModal.fromTemplateUrl('templates/cadastro.html', {
		scope: $scope
	}).then(function(modal1) {
		$scope.modal1 = modal1;
	});

  
  $scope.closeCadastro = function() {
    $scope.modal1.hide();
  };

 
  $scope.cadastro = function() {
    $scope.modal1.show();
  };

  
  $scope.doCadastro = function() {
	if ($scope.cadastroData.password.length >= 6){  
		$scope.closeCadastro();
		$scope.show();
		$timeout(function() {
		  $scope.showAlertCadastroRealizado();
		}, 3000);
	
  }else{
	$scope.show();	
	$timeout(function() {
		$scope.showAlertCadastro();
	}, 3000);
	
	}
  };
  
//********************************************* RECUPERAR SENHA  ***********************************************//

	$scope.senhaData = {};
 
	$scope.showAlertSenhaEnviada = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Senha Enviada',
		 template: 'Aguarde o E-mail!',
		 delay : '4000',
		 buttons: [
      	{text: '<b>Ok</b>',
        type: 'button-energized'}]
	   });
	   alertPopup.then(function(res) {
		 console.log('Obrigado');
	   });
	};
	
	$scope.showAlertSenha = function() {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Email Incorreto',
		 template: 'Tente Novamente',
		 delay : '4000',
	  	 buttons: [
      	{text: '<b>Ok</b>',
        type: 'button-energized'}]
	   });
	   alertPopup.then(function(res) {
		 console.log('Obrigado');
	   });
	};

  // Cria modal 
  $ionicModal.fromTemplateUrl('templates/recuperarSenha.html', {
    scope: $scope
  }).then(function(modal2) {
    $scope.modal2 = modal2;
  });

  // fechar modal 
  $scope.closeSenha = function() {
    $scope.modal2.hide();
  };

  // abrir modal
  $scope.senhaRecupera = function() {
    $scope.modal2.show();
  };

   $scope.doSenha = function() {
	if ($scope.senhaData.email.length >= 9){  
		$scope.closeSenha();
		$scope.show();
		$timeout(function() {
		  $scope.showAlertSenhaEnviada();
		}, 3000);
	
  }else{
	$scope.show();	
	$timeout(function() {
		$scope.showAlertSenha();
	}, 3000);
	
	}
  };
  

})
