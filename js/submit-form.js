function submit_search_form() { 

    var global_qvalue = document.getElementById('qterm_id').value;

    if(global_qvalue==""){
        global_qvalue = document.getElementById('mobile-globalsearch').value;
    }
   
    if(global_qvalue==""){
        return false;
    }
    document.getElementById("globalsearchId").action = "http://www.worldbank.org/en/search" + "?q=" + global_qvalue;
    document.getElementById("global_search").value = global_qvalue;
    document.getElementById("globalsearchId").submit();
    return false;
}
// global search header
function submit_search_form_upoverty() {


    event.preventDefault();
    var global_qvalue1 = document.getElementById('search_research_publications').value;

    if(global_qvalue1==""){
        return false;
    }
    document.getElementById("upovertyId").action = "http://documents.worldbank.org/curated/en/docsearch" + "?query=" + global_qvalue1;
    document.getElementById("upoverty").value = global_qvalue1;
    document.getElementById("upovertyId").submit();
}
// global understanding poverty header
