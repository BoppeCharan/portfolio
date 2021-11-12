 function handleMouseOver() {
        document.getElementById('h12').style.color = 'white';
        document.getElementById('h11').style.color = 'white';
 }
  function handleMouseOut() {
        document.getElementById('h12').style.color = '#02D463';
        document.getElementById('h11').style.color = '#02D463';
 }

  function handleMouseOver1() {
        document.getElementById('h14').style.color = 'white';
        document.getElementById('h13').style.color = 'white';
 }
  function handleMouseOut1() {
        document.getElementById('h14').style.color = '#02D463';
        document.getElementById('h13').style.color = '#02D463';
 }
  function handleMouseOver2() {
        document.getElementById('h15').style.color = 'white';
        document.getElementById('h16').style.color = 'white';
 }
  function handleMouseOut2() {
        document.getElementById('h15').style.color = '#02D463';
        document.getElementById('h16').style.color = '#02D463';
 }

   function handleMouseOver3() {
        document.getElementById('h17').style.color = 'white';
        document.getElementById('h18').style.color = 'white';
 }
  function handleMouseOut3() {
        document.getElementById('h17').style.color = '#02D463';
        document.getElementById('h18').style.color = '#02D463';
 }



function validate(){
       
       var name = document.getElementById("firstName").value;
       var lastName = document.getElementById("lastName").value;
       var phone = document.getElementById("phoneNumber").value;
       var email = document.getElementById("email").value;
       var message = document.getElementById("message").value;
       var error_message = document.getElementById("error_message");
       alert("Hey "+name+",I will Contact You");
     }