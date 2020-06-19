var i=10,j=10;
function Iclap(a)
{
  switch (a) {
    case 'vc':
      document.getElementById('clap').innerHTML= ++i +"  Claps";
      break;

      case 'vl':
      document.getElementById('like').innerHTML= ++j +"  Likes";
      break;
  }
}
