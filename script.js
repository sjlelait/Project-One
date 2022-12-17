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
        $input.val("");        
        $.ajax({
            url: "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/"+userInput+"?key=020263dd-5ac1-411c-864b-fcf1f0644c9b"
        }).then(
            function (data) {
                wordData = data
                render()                                                                           
            },
            function (error) {
                console.log("bad request", error)
            }
        )        
    }
    saveWord();

    function render() {
        $word.text(wordData[0].hwi.hw)
        $synonym.text(wordData[0].meta.syns[0].join(",  "))
        $shortDef.text(wordData[0].shortdef.join(",  "))
        $("#data").show(1000); 
        $("aside").show(1000);
        $("#newForm").show(1000);       
    };    
    
    function saveWord() {                
        $("#save").click(function (evt) {
            evt.preventDefault()
            inputVal = $("#newInput").val();
            $("ul").append("<li>"+inputVal+"</li>");

            //
        });
    }
    
});