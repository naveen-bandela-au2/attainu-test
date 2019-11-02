 str2num=str=>{
   sum=0;
   for(let i=0;i<str.length;i++)
   {
     if((str[i].charCodeAt()>47&&str[i].charCodeAt()<58))
     sum=(sum*=10)+(str[i].charCodeAt()-48);
     else if((str[i].charCodeAt()!=32)&&(str[i].charCodeAt()!=45))
          return 0;
   }
  if(str[0].charCodeAt()==45)
  //return -Math.abs(sum);
  return sum-(2*sum)
  return sum
}
console.log('i/p:"10" , type/converted:', typeof(str2num("10")),'     o/p:', str2num("10"))
console.log('i/p:"-21",   type/converted:', typeof(str2num("-21")),'    o/p:', str2num("-21"))
console.log('i/p:"    11",   type/converted:', typeof(str2num("   11")),'   o/p:', str2num("   11"))
console.log('i/p:"18  ",   type/converted:', typeof(str2num("18     ")),'   o/p:', str2num("18  "))
console.log('i/p:"attainu10",    type/converted:', typeof(str2num("attainu10")),'   o/p:', str2num("attainu10"))