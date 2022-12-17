const $word = $(`#word`);
const $synonym = $(`#syn`);
const $shortDef = $(`#short-def`);
const $input = $(`input[type="text"]`);

let wordData, userInput

$(document).ready(function() {
    $("form").on("submit", handleData)    
    function handleData(evt) {
        evt.preventDefault()
<<<<<<< HEAD
        userInput = $input.val()        
=======
        userInput = $input.val()
        $input.val("");        
>>>>>>> main
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
<<<<<<< HEAD
        $("#data").toggle(1000);
        
    };
    function saveWord() {
        $newForm = $("<form id=newForm></form>");
        $newForm.append('<input id="inputVal" type="text" placeholder="Your word"/> <input id="save" type="submit" value="Save"/>')
        $("div").append($newForm);
        $("ul").toggle(1000);
        $("#save").click(function(evt) {
            evt.preventDefault();
            inputVal = $("#inputVal").val();               
=======
        $("#data").show(); 
        $("aside").show();
        $("#newForm").show();       
    };    
    
    function saveWord() {                
        $("#save").click(function (evt) {
            evt.preventDefault()
            inputVal = $("#newInput").val();
>>>>>>> main
            $("ul").append("<li>"+inputVal+"</li>");

            //
        });
    }
    
});

