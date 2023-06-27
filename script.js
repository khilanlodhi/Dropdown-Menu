var countryStateInfo = {
	"Albania": {
		"Berat County": {
        },
		"Berat District":{
            "Banaj":[],
            "Bashkia Berat":[],
            "Bashkia Kuçovë":[],
            "Bashkia Poliçan":[],
            "Bashkia Skrapar":[],
            "Berat":[],
            "Çorovodë":[],
        },
        "Bulqizë District":{

        },
        "Delvinë District":{

        },
        "Devoll District":{

        },
        "Dibër County":{
            "Bashkia Bulqizë":[],
            "Bashkia Klos":[],
            "Bashkia Mat":[],
            "Bulqizë":[],
            "Burrel":[],
            "Klos":[],
            "Peshkopi":[],
        },
        "Dibër District":{

        },
        "Durrës County":{

        },
        "Durrës District":{
            "Bashkia Durrës":[],
            "Bashkia Krujë":[],
            "Bashkia Durrës":[],
            "Bashkia Shijak":[],
            "Durrës":[],
            "Durrës District":[],
            "Fushë-Krujë":[],
            "Krujë":[],
            "Rrethi i Krujës":[],
            "Shijak":[],
        },
        "Elbasan County":{

        },
        "Fier County":{
            "Ballsh":[],
            "Bashkia Divjakë":[],
            "Bashkia Fier":[],
            "Bashkia Mallakastër":[],
            "Bashkia Patos":[],
            "Fier":[],
            "Divjakë":[],
            "Fier-Çifçi":[],
            "Lushnjë":[],
        },
        "Fier District":{

        },
        "Gjirokastër District":{
            "Bashkia Dropull":[],
            "Bashkia Kelcyrë":[],
            "Bashkia Libohovë":[],
            "Bashkia Memaliaj":[],
            "Bashkia Përmet":[],
            "Bashkia Tepelenë":[],
            "Gjinkar":[],
            "Gjirokastër":[],
        },
	},
	"Colombia": {
		"Antioquia": {
			"Abejorral": [],
			"Abriaquí" : [],
            "Alejandría": [],
			"Amagá" : [],
            "Amalfi": [],
			"Andes" : [],
            "Angelópolis": [],
			"Anorí" : [],
            "Anza": [],
			"Apartadó" : [],
		},
        "Arauca":{

        },
        "Amazonas":{
            "El Encanto":[],
            "La Chorrera":[],
            "El Encanto":[],
            "La Pedrera":[],
            "La Victoria":[],
            "Leticia":[],
            "Miriti - Paraná":[],
            "Puerto Alegría":[],
            "Puerto Arica":[],
            "Puerto Nariño":[],
        },
        "Atlántico":{

        },
        "Bogotá D.C.":{
        },
	},
    "India":{
        
        "Andaman and Nicobar Islands":{
            "Bamboo Flat":[],
            "Nicobar":[],
            "Port Blair":[],
            "South Andaman":[],
        },
        "Assam":{
            "Abhayapuri":[],
            "Amguri":[],
            "Badarpur":[],
            "Baksa":[],
            "Barpathar":[],
            "Barpeta Road":[],
            "Bihpuriagaon":[],
            "Bijni":[],
            "Bilasipara":[],
            "Bokajan":[],
            "Bokakhat":[],
            "Bongaigaon":[],
            "Chabua":[],
            "Chapar":[],
            "Chirang":[],
            "Darrang":[],
            "Dhekiajuli":[],
        },
        "Andhra Pradesh":{
            "Along":[],
            "Anjaw":[],
            "Basar":[],
            "Bomdila":[],
            "Changlang":[],
            "East Kameng":[],
            "East Siang":[],
            "Hayuliang":[],
            "Itanagar":[],
        },
        "Andhra Pradesh":{
            "Addanki":[],
            "Adoni":[],
            "Akasahebpet":[],
            "Akividu":[],
            "Akkarampalle":[],
            "Amalapuram":[],
            "Amudalavalasa":[],
            "Atmakur":[],
        },
    },
    "Sri Lanka":{
        "Ampara District":{

        },
        "Anuradhapura District":{
         
        },
        "Western Province":{
            "Hendala":[],
            "Gampaha District":[],
            "Hanwella Ihala":[],
            "Horana South":[],
            "Horawala Junction":[],
            "Ja Ela":[],
            "Kalutara":[],
            "Katunayaka":[],
            "Kelaniya":[],
            "Kotikawatta":[],
            "Minuwangoda":[],
        },
        "Central Province":{
            "Nuwara Eliya District":[],
            "Dambulla":[],
            "Hatton":[],
            "Kandy":[],
            "Matale":[],
            "Matale District":[],
            

        },
}
}


window.onload = function() {

    //Get html elements
    var countySel = document.getElementById("countySel");
    var stateSel = document.getElementById("stateSel");
    var citySel = document.getElementById("citySel");
    
  
    //Load countries
    for (var country in countryStateInfo) {
      countySel.options[countySel.options.length] = new Option(country, country);
    }
  
    //County Changed
    countySel.onchange = function() {
  
      stateSel.length = 1; // remove all options bar first
      citySel.length = 1; // remove all options bar first
  
  
      if (this.selectedIndex < 1)
        return; // done
  
      for (var state in countryStateInfo[this.value]) {
        stateSel.options[stateSel.options.length] = new Option(state, state);
      }
    }
  
    //State Changed
    stateSel.onchange = function() {
  
      citySel.length = 1; // remove all options bar first
      
  
      if (this.selectedIndex < 1)
        return; // done
  
      for (var city in countryStateInfo[countySel.value][this.value]) {
        citySel.options[citySel.options.length] = new Option(city, city);
      }
    }
  
    //City Changed
    citySel.onchange = function() {
      
  
      if (this.selectedIndex < 1)
        return; // done
  
      var zips = countryStateInfo[countySel.value][stateSel.value][this.value];
      for (var i = 0; i < zips.length; i++) {
        zipSel.options[zipSel.options.length] = new Option(zips[i], zips[i]);
      }
    }
  }
  