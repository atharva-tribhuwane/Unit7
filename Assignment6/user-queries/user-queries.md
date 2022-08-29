

Find all the female users--->db.users.find({gender : "Female"})


Find all the female users who speak one of the two languages Kannada, Hindi--->db.users.find({$or : [{language : "Kannada"},{language : "Hindi"}], gender : "Female"})


Find all the male users who can speak Hindi and female users who can speak Kannada--->db.users.find({$or : [{language : "Hindi", gender : "Male"},{language : "Kannada", gender : "Female"}]})


Find all the users who wear the shirt size S--->db.users.find({shirt_size : "S"})


Find all the female users who wear the shirt size XL--->db.users.find({gender : "Female", shirt_size : "XL"})


Find all the English speaking male users and Hindi speaking female users--->db.users.find({$or : [{language : "Hindi", gender : "Female"},{language : "English", gender : "Male"}]})


Find all the male users who can speak Hindi or English and female users who can speak Kannada or German--->


Find all the female users who can speak Bengali who wear shirt size XL and male users who speak German and wear shirt size either L or M--->


Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam)--->db.users.find({$and : [{gender : "Female"}, {$or : [{language : "Hindi"},{language : "Punjabi"},{language : "Bengali"},{language : "Gujarati"},{language : "Tamil"},{language : "Malayalam"}]}]})


Men who can speak Korean--->db.users.find({gender : "Male", language : "Korean"})