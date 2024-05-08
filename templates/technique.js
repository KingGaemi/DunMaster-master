// Usage: <script src="{% static 'technique.js' %}"></script>
// Description: This script is used to show and hide the content of the technique page.

function getLastProperty(obj) {
    var keys = Object.keys(obj);
    var lastKey = keys[keys.length - 1];
    return obj[lastKey];
}
function decodeHtmlEntities(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function prosseceJson(json) {

    
    json = json.slice(1, -1);
    json = json.replace(/&#39;/g, '"');
    json = json.replace(/&#34;/g, '"');
    json = json.replace(/None/g, 'null');
    json = json.replace(/True/g, 'true');
    json = json.replace(/False/g, 'false');
    // console.log(json);
    return JSON.parse(json);
}


function generateEquipmentsTooltip() {
    console.log("try");   
    console.log('{{equipmentsJSON["equipment"][0]["itemName"]}}');
    '{% for equipment in equipmentsJSON["equipment"] %}'
        console.log('{{equipment["itemName"]}}');

    '{% endfor %}'


    let optionString = ''; // need to declare here
    '{% for equipment in equipmentsJSON["equipment"] %}'
        console.log("Tag tooltip"+ '{{loop.index}}');
        

        // None
        var targetTooltip = document.getElementById('tooltip_' + '{{loop.index}}');
        if (targetTooltip == null) {
            console.log('targetTooltip: null');
            return;
        }
         

        // Custom Option
        '{% if "customOption" in equipment  %}'
            '{% for option in equipment["customOption"]["options"] %}'
                optionString = '{{option["explain"] | safe | replace("\n", "<br>")}}';
                optionString = optionString.replace(/&lt;br&gt;/g, '<br>');
                targetTooltip.innerHTML += '<div class="tooltipOption" style ="margin-bottom: 15px;"><span>' + ('{{loop.index}}') + '옵션<br></span><span>' + optionString + '<br></span></div>';
            '{% endfor %}'


        // Fixed Option 
        '{% elif  "fixedOption" in equipment  %}'
            optionString = '{{equipment["fixedOption"]["explain"] | safe | replace("\n", "<br>")}}';
            optionString = optionString.replace(/&lt;br&gt;/g, '<br>');
            targetTooltip.innerHTML += '<span>고정 옵션</span><br><span>' + optionString+ '</span>';
        

        // Asrahan Option
        '{% elif "asrahanOption" in equipment  %}'
            '{% for option in equipment["asrahanOption"]["options"] %}'
                optionString = '{{option["explain"] | safe | replace("\n", "<br>")}}';
                optionString = optionString.replace(/&lt;br&gt;/g, '<br>');
                targetTooltip.innerHTML += '<span>' +  '{{option["name"]}}' + '</span><br><span>' + optionString+ '</span>';
            '{% endfor %}'
        // Default
        '{% else %}' 
            targetTooltip.innerHTML += '<span>Defult</span><span>Defult</span>';
        '{% endif %}'

        
    '{% endfor %}'
    
}
// 라디오 버튼 요소들을 가져옵니다.
var infoContents = document.querySelectorAll('input[name="infoRadio"]');
// 내용 요소들을 가져옵니다.
var contents = document.querySelectorAll('.content');

// 라디오 버튼에 이벤트 리스너를 추가합니다.
infoContents.forEach(function(option, index) {
    option.addEventListener('change', function() {
        // 모든 내용을 숨깁니다.
        contents.forEach(function(content) {
            content.style.display = 'none';
        });
        // 선택된 라디오 버튼에 해당하는 내용을 보이도록 만듭니다.
        document.getElementById('content' + (index + 1)).style.display = 'block';
    });
});

window.onload = function() {
  generateEquipmentsTooltip();

};
