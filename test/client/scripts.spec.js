describe("Action to disable / enable date fields", function() {
    var $inputText;
    var $inputCheckbox;

    beforeEach(function() {
        var fixture     = setFixtures('<input class="js-date" type="text"><input class="js-disabledate" type="checkbox">');
        $inputText      = fixture.find('.js-date');
        $inputCheckbox  = fixture.find('.js-disabledate');

        Desafio.enableDisableFields($inputCheckbox, $inputText);
    });

    it("Disable the date fields", function(done) {
        expect($inputCheckbox).toHaveClass('js-disabledate');        
        expect($inputCheckbox.trigger('click')).toBeChecked();

        expect($inputText).toHaveClass('js-date');
        expect($inputText).toBeDisabled();
        expect($inputText).toHaveValue('');

        $inputText.each(function() {
            expect(Desafio.validation.removeError(this)).toBeTruthy();
        });

        done();
    });

    it("Enable the date fields", function(done) {
        $inputCheckbox.prop('checked', true);

        expect($inputCheckbox).toHaveClass('js-disabledate');
        expect($inputCheckbox.trigger('click')).not.toBeChecked();

        expect($inputText).toHaveClass('js-date');
        expect($inputText).not.toBeDisabled();

        done();
    });
});

describe("Do not allow the insertion of special characters and digits", function() {
    var $inputText;
    var regex = /[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ ]/g;

    beforeEach(function() {
        var fixture = setFixtures('<input class="js-field-string" type="text" value="">');
        $inputText  = fixture.find('.js-field-string');

        Desafio.alphaFieldsValidate($('.js-field-string'));
    });

    it("Entering an invalid character", function(done){
        var eventKeyDown = $.Event("keydown", {which: 49, keyCode: 49, charCode: 49});
        var eventKeyUp   = $.Event("keyup", {which: 49, keyCode: 49, charCode: 49});
        var valueKeyDown;
        var valueKeyUp;
        
        $inputText.trigger('keydown');
        valueKeyDown = String.fromCharCode(eventKeyDown.charCode).replace(regex, "");
        expect($inputText.val(valueKeyDown)).toHaveValue('');

        $inputText.trigger('keyup');
        valueKeyUp = String.fromCharCode(eventKeyUp.charCode).replace(regex, "");
        expect($inputText.val(valueKeyUp)).toHaveValue('');
        done();
    });

    it("Entering an valid character", function(done){
        var eventKeyDown = $.Event("keydown", {which: 72, keyCode: 72, charCode: 72});
        var eventKeyUp   = $.Event("keyup", {which: 72, keyCode: 72, charCode: 72});
        var valueKeyDown;
        var valueKeyUp;
        
        $inputText.trigger('keydown');
        valueKeyDown = String.fromCharCode(eventKeyDown.charCode).replace(regex, "");
        expect($inputText.val(valueKeyDown)).toHaveValue('H');

        $inputText.trigger('keyup');
        valueKeyUp = String.fromCharCode(eventKeyUp.charCode).replace(regex, "");
        expect($inputText.val(valueKeyUp)).toHaveValue('H');
        done();
    });

});

/// Testar mais
// describe("Form validation", function() {

//     it("Blocking submit event", function(done) {

//         var fixture = setFixtures('<form class="form action="post"><input class="form-field" type="text" value=""><input class="form-action-submit" type="submit" value="Enviar"></form>');
//         $form       = fixture.find('.form');
//         $inputText  = fixture.find('.form-field');

//         Desafio.formSubmit($form, $inputText);

//         var spyEvent = spyOnEvent($form, 'submit');
//         $form.trigger("submit");
//         expect(spyEvent).toHaveBeenTriggeredOn($form);

//         done();
//     });
// });


describe("Check enabled fields", function() {

    beforeEach(function() {
        var fixture = setFixtures('<form class="form action="post"><input class="form-field" type="text" value=""></form>');
        $form       = fixture.find('.form');
        $inputText  = fixture.find('.form-field:enabled');

        Desafio.alterFields( $inputText );
    });

    it("Fields invalids", function() {
        $inputText.trigger('keyup');
        expect($inputText).toHaveValue('');
        expect($inputText).toHaveClass('error-field');

        $inputText.trigger('change');
        expect($inputText).toHaveValue('');
        expect($inputText).toHaveClass('error-field');
    });

    it("Fields valids", function() {
        var eventKeyUp = $.Event("keyup", {which: 72, keyCode: 72, charCode: 72});
        var valueKeyUp;

        $inputText.trigger('keyup');
        valueKeyUp = String.fromCharCode(eventKeyUp.charCode);
        expect($inputText.val(valueKeyUp)).toHaveValue('H');

        $inputText.trigger('change');
        $inputText.val('21/12/2015');
        expect($inputText).not.toHaveValue('');
    });
});