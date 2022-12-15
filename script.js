// API source code 
//"https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+userInput+"?key=020263dd-5ac1-411c-864b-fcf1f0644c9b"
// KEY 020263dd-5ac1-411c-864b-fcf1f0644c9b
const $word = $(`#word`);
const $synonym = $(`#syn`);
const $shortDef = $(`#short-def`);
const $input = $(`input[type="text"]`);

let wordData, userInput

$(document).ready(function() {
    $("form").on("submit", handleData)
    function handleData(evt) {
        evt.preventDefault()
        userInput = $input.val()
        $.ajax({
            url: "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+userInput+"?key=020263dd-5ac1-411c-864b-fcf1f0644c9b"
        }).then(
            (data) => {
            wordData = data
                render()
            },
            (error) => {
                console.log("bad request", error)
            }
        )
    }

    function render() {
        $word.text(wordData[0].hwi.hw)
        $synonym.text(wordData[0].meta.syns[0,1,2])
        $shortDef.text(wordData[0].shortdef)

        console.log(wordData[0])
    }

})