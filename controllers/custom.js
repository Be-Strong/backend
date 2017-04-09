var data = [
  {
    "_id": "58ea194e1adc1f9e07386029",
    "gender": "female",
    "status": "single parent",
    "cancersubtype": "Ductal Carcinoma In Situ",
    "language": "english",
    "firstname": "Olivia",
    "lastname": "Bangwal",
    "username": "Oliviab",
    "email": "Oliviab@usc.edu",
    "password": "$2a$10$U/jIMkEor5HOPiSNQeWqMuIc.eph40Qsdu83XJ0kE.ZN85pOz6nyO",
    "occupation": "coal mining",
    "profile_pic": "http://www.arlington-tx.gov/news/wp-content/uploads/sites/2/2016/03/Articles-UTA-Cancer-Health-03-14-16.jpg",
    "role": "post-treatment",
    "cancertype": "breast cancer",
    "side_effects": "nausea, vomitings, headache",
    "symptoms": "hair loss, pain",
    "radiation_therapy": "no",
    "chemo_therapy": "no",
    "immunotherapy": "yes",
    "targeted_therapy": "no",
    "stem_cell_therapy": "no",
    "__v": 0
  },
  {
    "_id": "58ea19891adc1f9e0738602a",
    "gender": "female",
    "status": "single parent",
    "cancersubtype": "Ductal Carcinoma In Situ",
    "language": "english",
    "firstname": "Sophia",
    "lastname": "larl",
    "username": "Sophial",
    "email": "Sophial@usc.edu",
    "password": "$2a$10$KQH4VAZ/mesaBVzQz/momeW3Y.8M1gxGO5peQ0U2VJj3r1NYGhApW",
    "occupation": "coal mining",
    "profile_pic": "http://www.arlington-tx.gov/news/wp-content/uploads/sites/2/2016/03/Articles-UTA-Cancer-Health-03-14-16.jpg",
    "role": "in-treatment",
    "cancertype": "breast cancer",
    "side_effects": "nausea, vomitings, headache",
    "symptoms": "hair loss, pain",
    "radiation_therapy": "no",
    "chemo_therapy": "no",
    "immunotherapy": "yes",
    "targeted_therapy": "no",
    "stem_cell_therapy": "no",
    "__v": 0
  },
  {
    "_id": "58ea19d41adc1f9e0738602b",
    "gender": "female",
    "status": "married",
    "cancersubtype": "Squamous cell carcinoma",
    "language": "spanish",
    "firstname": "Emma",
    "lastname": "watson",
    "username": "Emmaw",
    "email": "Emmaw@usc.edu",
    "password": "$2a$10$tbA7rKDp1PAWo.BzZ5fNUudWP..kKVVGvOb6txmj5w4IDOp8maftW",
    "occupation": "software Engineer",
    "profile_pic": "http://www.arlington-tx.gov/news/wp-content/uploads/sites/2/2016/03/Articles-UTA-Cancer-Health-03-14-16.jpg",
    "role": "in-treatment",
    "cancertype": "lung cancer",
    "side_effects": "nausea, vomitings, headache",
    "symptoms": "hair loss, pain",
    "radiation_therapy": "no",
    "chemo_therapy": "no",
    "immunotherapy": "yes",
    "targeted_therapy": "no",
    "stem_cell_therapy": "no",
    "__v": 0
  },
  {
    "_id": "58ea1a111adc1f9e0738602c",
    "gender": "male",
    "status": "married",
    "cancersubtype": "Large cell neuroendocrine tumors",
    "language": "english",
    "firstname": "Olivia",
    "lastname": "bolin",
    "username": "Oliviab",
    "email": "Oliviab@usc.edu",
    "password": "$2a$10$9i6xy3HEXmmrhWO1.3gEKeMPcke7MYE3GXFZmDJqs8uPSH8Stx9wu",
    "occupation": "software Engineer",
    "profile_pic": "http://www.arlington-tx.gov/news/wp-content/uploads/sites/2/2016/03/Articles-UTA-Cancer-Health-03-14-16.jpg",
    "role": "in-treatment",
    "cancertype": "lung cancer",
    "side_effects": "nausea, vomitings, headache",
    "symptoms": "hair loss, pain",
    "radiation_therapy": "no",
    "chemo_therapy": "no",
    "immunotherapy": "yes",
    "targeted_therapy": "no",
    "stem_cell_therapy": "no",
    "__v": 0
  },
  {
    "_id": "58ea1a411adc1f9e0738602d",
    "gender": "female",
    "status": "married",
    "cancersubtype": "Large cell neuroendocrine tumors",
    "language": "chinese",
    "firstname": "James",
    "lastname": "bond",
    "username": "Jamesb",
    "email": "Jamesb@usc.edu",
    "password": "$2a$10$x6Ykp0A2ZjiEmNE3mfJqYeWg3fo3PsCbk10VBMJKQOdhm3xdooqey",
    "occupation": "software Engineer",
    "profile_pic": "http://www.arlington-tx.gov/news/wp-content/uploads/sites/2/2016/03/Articles-UTA-Cancer-Health-03-14-16.jpg",
    "role": "in-treatment",
    "cancertype": "lung cancer",
    "side_effects": "nausea, vomitings, headache",
    "symptoms": "hair loss, pain",
    "radiation_therapy": "no",
    "chemo_therapy": "no",
    "immunotherapy": "yes",
    "targeted_therapy": "no",
    "stem_cell_therapy": "no",
    "__v": 0
  }
]


var app = angular.module('myApp', [])
app.controller("myCntl",function($scope, $http){
   $scope.data = "";
    
    $http.get("url").success(function(response){
       $scope.data = response.data; 
    });
    
    $scope.update = function(){
        var minage = slider.noUiSlider.get()[0];
        var maxage = slider.noUiSlider.get()[1];
        var lang = document.getElementById("language").value;
        var location = document.getElementById("location").value;
        var loc = location.split(",");
        var city = loc[0];
        var state = loc[1];
        var country = loc[2];
        var status = document.getElementById("status").value;
        var cancertype = document.getElementById("cancertype").value;
        var cancersubtype = document.getElementById("cancersubtype").value;
        var role = "";
        if(document.getElementById("group1_in").checked)
            role = "intreatment";
        else
            role = "posttreatment";
        var treatment = document.getElementById("treatments").value;
        var occupation = document.getElementById("occupation").value;
        var gender;
        if(document.getElementById("group2_male").checked)
            gender = "male";
        else
            gender = "female";
        console.log(minage);
        console.log(maxage);
        console.log(lang);
        console.log(city);
        console.log(state);
        console.log(country);
        console.log(status);
        console.log(cancertype);
        console.log(cancersubtype);
        console.log(role);
        console.log(treatment);
        console.log(occupation);
        console.log(gender);

        var str = "div";
        var i = 0;
        var langpos, agepos
        while(i!=11)
        {

            i++;
        }

        $http.get(url).success(function(response){
            $scope.data = response.data;
        });
        
    };
    
});


/*
0. Treatment
1. Age
2. Cancer subtype
3. cancer type
4. gender
5. Language
6. location
7. status
8. occupation
9. phase

*/
