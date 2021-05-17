describe('The Greetings Function', function () {
    describe('Greetings', function () {
        it('should greet "Hello, Jodie"', function () {
            let greeting = theGreet();

            assert.equal(greeting.greetMe('Jodie', 'English'), 'Hello, Jodie');
        });
        it('should greet "Goeie More, Amy"', function () {
            let greeting = theGreet();

            assert.equal(greeting.greetMe('Amy', 'Afrikaans'), 'Goeie More, Amy');
        });
        it('should greet "Molo, Paul"', function () {
            let greeting = theGreet();

            assert.equal(greeting.greetMe('Paul', 'isiXhosa'), 'Molo, Paul');
        });
    });
    describe('Error Messages', function () {

        it('should return "Please enter your name and select a language" since no name or language was entered', function () {
            let greeting = theGreet();
            greeting.noName();
            assert.equal(greeting.noName(), 'Please enter your name and select a language');
        });


        it('should return "Please select a language" since no language was selected', function () {
            let greeting = theGreet();
            greeting.warnLang('Jodie');
            assert.equal(greeting.warnLang(), 'Please select a language');
        });

        it('should return "Please enter a name" since no name was entered', function () {
            let greeting = theGreet();
            greeting.removeValidName();
            assert.equal(greeting.removeValidName(), 'Please enter a name');
        });
    });
    describe('Storing values', function () {
        it('should test that the counter returns 3 since there are three names entered', function () {
            let greeting = theGreet();
            greeting.addNames("Jodie", "English");
            greeting.addNames("Paul", "Afrikaans");
            greeting.addNames("Amy", "isiXhosa");
            assert.equal(3, greeting.theCount());

        });

        it('should store the names "Jodie, Paul, Amy"', function () {
            let greeting = theGreet();
            greeting.addNames("Jodie", "English");
            greeting.addNames("Paul", "Afrikaans");
            greeting.addNames("Amy", "isiXhosa");
            assert.equal(greeting.returnNames(), ['JODIE', 'PAUL', 'AMY']);
        });

        it('should test that the counter does not greet "Jodie" and "Paul" twice', function () {
            let greeting = theGreet();
            greeting.addNames("Jodie", "English");
            greeting.addNames("Paul", "Afrikaans");
            greeting.addNames("Amy", "isiXhosa");
            greeting.addNames("Jodie", "English");
            greeting.addNames("paul", "Afrikaans");
            assert.equal(greeting.theCount(), 3);
        });
    });

});
