

// global variables
var country_id = 0,
country_name = "",
country_refugees = 0;

function    gotoCountry(tmp_id) {
    country_id = tmp_id;
    console.log("goto "+country_id);
    loadCountryDestInfo();
}

// load destination country info
function loadCountryDestInfo() {
    // extract json info based on country_id
    $.getJSON('data/country_data.json', function(data) {
        var tmp_id = 0;
        $.each(data, function(index, element) {
            tmp_id = element.id;
            if (tmp_id == country_id) { 
                // prefill country page info
                $("#country_name").html(element.name);
                $("#country_refugees").html(element.refugees);
                $("#country_asylum").html(element.asylum);
                $("#country_retref").html(element.returnedref);
                $("#country_stateless").html(element.stateless);
                $("#country_idps").html(element.idp);
                $("#country_retidps").html(element.returnedidp);
                $("#country_reftop_1_name").html(element.top_coo_1_name);
                $("#country_reftop_1").html(element.top_coo_1_value);
                $("#country_reftop_2_name").html(element.top_coo_2_name);
                $("#country_reftop_2").html(element.top_coo_2_value);
                $("#country_reftop_3_name").html(element.top_coo_3_name);
                $("#country_reftop_3").html(element.top_coo_3_value);
            };
        });
    });
}

// load origin country info
function loadCountryOriginInfo() {
    // extract json info based on country_id
    $.getJSON('data/country_origin_data.json', function(data) {
        var tmp_id = 0;
        $.each(data, function(index, element) {
            tmp_id = element.id;
            if (tmp_id == country_id) { 
                // prefill country page info
                $("#country_name").html(element.name);
                $("#country_refugees").html(element.refugees);
                $("#country_asylum").html(element.asylum);
                $("#country_retref").html(element.returnedref);
                $("#country_stateless").html(element.stateless);
                $("#country_idps").html(element.idp);
                $("#country_retidps").html(element.returnedidp);
                $("#country_reftop_1_name").html(element.top_coo_1_name);
                $("#country_reftop_1").html(element.top_coo_1_value);
                $("#country_reftop_2_name").html(element.top_coo_2_name);
                $("#country_reftop_2").html(element.top_coo_2_value);
                $("#country_reftop_3_name").html(element.top_coo_3_name);
                $("#country_reftop_3").html(element.top_coo_3_value);
            };
        });
    });
}


    $(document).ready(function(){
        $('#countryList li a').each(function(){
            var elementID = $(this).attr('id');      
            $(countryList).on('click', '#'+elementID, function(event){  
                country_id = elementID; 
                $.mobile.changePage( "#countrypage");
                loadCountryDestInfo();
        });
    });
});