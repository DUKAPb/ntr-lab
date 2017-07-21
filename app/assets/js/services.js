'use strict';

angular.module('testApp')
        .service('notesService', function() {
            var notes = [
                {
                  id:1,
                  text:'Closures are closely related to function scopes, so understanding how these scopes work will help you understanding closures. In short, the most important thing to understand about scopes is that when you execute a function, a private function scope is created and used for the process of executing that function.',
                },
                {
                  id:2,
                  text:'Now we have just a nice piece of template, and can even easily test whether our validations work correctly with unit tests, without diving into the view.',
                },
                {
                  id:3,
                  text:'You should be wary when using the singleton pattern, as by its very nature it introduces global state into your application, reducing testability.',
                }              
            ];
            this.getNotes = function(){
                return notes;
            };
            this.getNote = function (index) {
                return notes[index];
            };
            var that = this;
            this.getNoteById = function (noteId) {
                var index = (noteId < 1) ? 0 : noteId - 1;
                return that.getNote(index);
            };            
        });