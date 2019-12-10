var salesArray = [0,0,0,0,0,0,0];
for (i=0; i < 7; i++){
    salesArray[i] = Number(window.prompt("Enter the sales for the week."));
}
var total = 0;
for (i=0; i <7; i++){
    total = salesArray[i] + total;
}
    
document.write("The total sales for this week is $" + total + ".");