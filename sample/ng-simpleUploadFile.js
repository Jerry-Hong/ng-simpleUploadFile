
angular.module('simpleUploadFile',[]).directive('inputFile', ['$timeout',function($timeout){
		return {
			scope: {
				model:'='
			},
			restrict: 'E',
			//templateUrl:'inputFile.html',
			template: '<div class="form-inline form-group"><input id="{{'+"'text'"+'+dataId}}" class="form-control" disabled="true" placeholder="Choose File"  style="line-height: 16px;" /><div class="fileUpload btn btn-primary" ><span>Upload</span><input type="file" class="upload" id="{{dataId}}" ></div></div>',
			link: function(scope, iElm, iAttrs, controller) {
				scope.dataId=iAttrs.recid;
				var fileId=scope.dataId;
				var textId='text'+scope.dataId;
				iElm.bind('change',function(){
					scope.$apply(function(){
					if(document.getElementById(fileId).files[0]){
						document.getElementById(textId).value=document.getElementById(fileId).files[0].name;
						scope.model=document.getElementById(fileId).files[0];
					}else{
						document.getElementById(textId).value='';
						scope.model={};
					}});
				});
			}
		};
	}]);