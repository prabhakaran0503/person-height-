var height=parseInt(prompt("Enter the your height"));

if(height<150){
    console.log("The person is Small")
}
else if((height>=150)&&(height<165)){
    console.log("The person is  average heighted")
}
else if((height>=165)&&(height<=195)){
    console.log("The person is taller")
}
else{
    console.log("Abnormal height")
}