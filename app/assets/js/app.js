'use strict';

angular.module('testApp', [])
    .controller('PageController', ['$scope', 'notesService', function($scope, notesService){
        $scope.notes = notesService.getNotes();
        $scope.lastText = '';
        $scope.form = {noteId:'', noteText:''};
        $scope.editNote = function(noteId){
            $scope.clean();
            var note = notesService.getNoteById(noteId);
            document.getElementById('noteId').value = note.id;
            $scope.form.noteText = note.text;
            $scope.form.noteId = note.id;
            $scope.lastText = note.text;
        };
        $scope.addNote = function(){
            $scope.lastText = '';
            $scope.clean();
        };
        $scope.saveForm = function(){
            var note = {};
            note.text = $scope.form.noteText;
            // editing mode
            if($scope.form.noteId !== ''){
                note.id = $scope.form.noteId;
                $scope.notes[note.id - 1].text = note.text;
            }
            // addition mode
            else {
                note.id = $scope.notes.length + 1;
                $scope.notes.push(note);
            }
            document.getElementById('closeModal').click();
            $scope.clean();
        };
        $scope.undo = function(){
            $scope.form.noteText = $scope.lastText;
        };
        $scope.clean = function(){
            $scope.form.noteId = '';
            $scope.form.noteText = '';
            $scope.textForm.$setPristine();
        };
}])
;