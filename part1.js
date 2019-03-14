function validCandidate(languages) {
    let validCandidate = false
    let languageRegex = /^ES([0-9]*)$/
        if(Array.isArray(languages)) {
            validCandidate = !!languages.filter(function (language) {
                return languageRegex.test(language)
            }).length
        } else if (typeof languages == 'string') {
            validCandidate = languageRegex.test(languages)
        }
    return validCandidate
}

function test_validCandidate_multiple_numbers_expect_true () {
    let value = 'ES2015';
    let result = false;
    try { 
        result = validCandidate(value);
    } catch (e) {
        return false;
    } finally {
        return result;
    }
}

function test_validCandidate_single_number_expect_true () {
    let value = 'ES6';
    let result = false;
    try { 
        result = validCandidate(value);
    } catch (e) {
        return false;
    } finally {
        return result;
    }
}

function test_validCandidate_random_string_before_expect_false () {
    let value = 'asdES2015';
    let result = false;
    try { 
        result = validCandidate(value);
    } catch (e) {
        return false;
    } finally {
        return !result;
        //return true if result is false;
    }
}

function test_validCandidate_random_string_after_expect_false () {
    let value = 'ES2015asd';
    let result = false;
    try { 
        result = validCandidate(value);
    } catch (e) {
        return false;
    } finally {
        return !result;
        //return true if result is false;
    }
}

console.log('test_validCandidate_multiple_numbers_expect_true: ' + test_validCandidate_multiple_numbers_expect_true());
console.log('test_validCandidate_single_number_expect_true: ' + test_validCandidate_single_number_expect_true());
console.log('test_validCandidate_random_string_before_expect_false: ' + test_validCandidate_random_string_before_expect_false());
console.log('test_validCandidate_random_string_after_expect_false: ' + test_validCandidate_random_string_after_expect_false());