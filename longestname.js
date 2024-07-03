var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
let max=0;
let bigname="";
for(let i=0;i<friends.length;i++)
{
    let x=friends[i].length
    if(x > max)
    {
        max=x;
        bigname=friends[i];
    }
}
console.log("the longest name  is ", bigname)