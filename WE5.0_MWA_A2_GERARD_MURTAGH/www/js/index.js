
        /*
        http://localhost:8012/WE5.0_MWA_A2_01_Folder/index.js
        */



                var myApp = angular.module("myApp", []);

                myApp.controller("toDoListController", function($scope) {

                var toDoList = [ 
                                          
                {todoText:'The car...needs to be washed', done:false}
            
                ];

                $scope.toDoList = toDoList;
                                  
                    
                        
                $scope.addMeToList = function addMe() {
                $scope.toDoList.push(
                { 
                text: $scope.newToDo.text,
                description: $scope.newToDo.description
                    
                        }

                    );

                }
               
                                
                 $scope.remove = function removeMe() {
        var oldList = $scope.toDoList;
        $scope.toDoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.toDoList.push(x);
                            });
                        };
                
                    }); 

                   

 

