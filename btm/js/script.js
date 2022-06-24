function add_btn(a) { 

    if(cont < 8) { 
        var form = document.querySelector('.person').cloneNode(true); 
        document.querySelector('.person').after(form); } 
    else { return 0; } 
        return (++cont); } 
    
    function rmv_btn() { 
        var form = document.querySelector('.person'); 
        if(cont > 1) { form.remove(); --cont; } 
        else 
        return 0; 
    }

var cont = 1;