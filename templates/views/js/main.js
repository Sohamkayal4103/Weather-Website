const submitbtn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");


const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value;
    if (cityVal==="") {
        city_name.innerHTML=`Please enter a city name`;
        console.log("Please enter a city name");
    } else {
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal},Maharashtra&units=metric&appid=2b63fe5921ff74295d44fc6131c08621`;
        const response=await fetch(url);
        const data=await response.json();
        const arrdata=[data];
        temp.innerHTML=arrdata[0].main.temp;
        temp_status.innerHTML=arrdata[0].weather[0].main;
        city_name.innerHTML=`Results`;
        console.log(arrdata[0].weather[0].main);


        }catch{
            city_name.innerHTML=`Please enter city name properly`;
            console.log("Please enter city name properly");

        }
    }
}
submitbtn.addEventListener("click",getInfo);