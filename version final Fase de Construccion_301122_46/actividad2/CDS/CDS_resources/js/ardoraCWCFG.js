//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=6;
var score=0; scoreMax=2; scoreInc=2; scoreDec=2;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q0RT"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["RA","Qg","QQ","QQ","TA","TQ","SQ","Uw","Ug","UA"],["SQ","Tw","Tg","Tg","RQ","QQ","TQ","Tw","RQ","Ug"],["Uw","SA","QQ","QQ","Tg","Tg","UA","Rg","UQ","VQ"],["RQ","RQ","TA","TA","Rw","VA","TA","VA","VQ","RQ"],["0Q","TQ","SQ","SQ","VQ","RQ","RQ","Vw","SQ","Qg"],["Tw","","Uw","Uw","QQ","Tg","TQ","QQ","Uw","QQ"],["","","VA","SQ","Sg","RQ","RQ","Ug","SQ","Uw"],["","","QQ","Uw","RQ","Ug","Tg","RQ","VA",""],["","","Uw","","","","VA","","Tw",""],["","","","","","","QQ","","Uw",""]];
var x1=[5,1,10,9,8,7,6,4,3,1,2];
var y1=[1,2,1,1,1,1,1,1,1,1,1];
var x2=[5,10,10,9,8,7,6,4,3,1,2];
var y2=[8,2,7,10,8,10,8,8,9,6,5];
var imaCW=["","","","","","","","","","",""];
var audioCW=["","","","","","","","","","",""];
var defCW=["Diseñado para escribir procesos que pueden ser llevados a cabo por máquinas como las computadoras.","","Asegurar que los componentes individuales que integran al sistema o producto","Especificacion de necesidades","Conjunto de  Programas","Poner a disposición del cliente el producto","Corregir problemas del producto y re- liberar el producto como una nueva versión o revisión ","Proceso de investigar un problema que se quiere resolver","Ing. Encargados de Traducir las necesidades en programas.","Proceso de utilizar la información recolectada.","Autor/ se conoce como: Producción de Software "];
var colNum=10;
var rowNum=10;
