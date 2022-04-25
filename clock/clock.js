
/* Given link describes how to write a function to get time 
https://www.w3schools.com/js/js_date_methods.asp

showTime() function is written with the information in given link 
*/

let username = prompt ("Isminizi Giriniz: ") // Asks your name



let textinfo = document.querySelector(`#myName`) // Assigns the variable which has myName id to textinfo 

textinfo.innerHTML =`${username}` // username variable is written down to screen 

function showTime() {
    let gun = new Date() /*The getTime() method returns the number of milliseconds since January 1, 1970: 
                            const d = new Date();
                            d.getTime();
    */
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let time = document.querySelector(`#myClock`)

    time.innerHTML = `${gun.getHours()}:${gun.getMinutes()}:${gun.getSeconds()}  ${days[gun.getUTCDay()]}`
    setTimeout(showTime,1000)   /*The setTimeout() method calls a function after a number of milliseconds.
                                1 second = 1000 milliseconds.*/

    
     }
showTime(); //Calls Function




