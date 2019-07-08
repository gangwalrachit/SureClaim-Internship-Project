var year = document.getElementById('year');
var corporateName = document.getElementById('corporateName');
var agencyName=document.getElementById('agencyName');

var insurer=document.getElementById('insurer');
var tpa = document.getElementById('tpa');
var insAdvisor=document.getElementById('insAdvisor');
var startDate=document.getElementById('startDate');
var expDate=document.getElementById('expDate');
var covType=document.getElementById('covType');
var depCov=document.getElementById('depCov');
var sumIns1=document.getElementById('sumIns1');

var preOpd=document.getElementById('preOpd');
var postOpd=document.getElementById('postOpd');

var rentLimit=document.getElementById('rentLimit');
var icuWard=document.getElementById('icuWard');

var si1=document.getElementById('si1');
var si2=document.getElementById('si2');
var si3=document.getElementById('si3');
var cn1=document.getElementById('cn1');
var cn2=document.getElementById('cn2');
var cn3=document.getElementById('cn3');
var cc1=document.getElementById('cc1');
var cc2=document.getElementById('cc2');
var cc3=document.getElementById('cc3');

var mat=document.getElementById('mat');
var cwl=document.getElementById('cwl');

var com1=document.getElementById('com1');
var com2=document.getElementById('com2');
var com3=document.getElementById('com3');
var cap1=document.getElementById('cap1');
var cap2=document.getElementById('cap2');
var cap3=document.getElementById('cap3');

var link=document.getElementById('link');

var name=document.getElementById('name');
var phno=document.getElementById('phno');
var email=document.getElementById('email');

var url = 'http://localhost:3000/final?year=' + year + '&corporateName=' + corporateName 
	+'&agencyName='+ agencyName;

url = url+'&tpa='+tpa;

url = url +'&insurer='+insurer+'&insAdvisor='+insAdvisor+'&startDate='+startDate+'&expDate='
	+expDate+'&covType='+covType+'&depCov='+depCov+'&sumIns1='+sumIns1+'&mat='+mat+'&cwl='+cwl;
url = url+'&preOpd='+preOpd+'&postOpd='+postOpd+'&rentLimit='+rentLimit+'&icuWard='+icuWard;
url=url+'&si1='+si1+'&si2='+si2+'&si3='+si3+"&cn1="+cn1+"&cn2="+cn2+"&cn3="+cn3+"&cc1="+cc1+"&cc2="+cc2+"&cc3="+cc3;
url=url+'&com1='+com1+'&com2='+com2+'&com3='+com3+'&cap1='+cap1+'&cap2='+cap2+'&cap3='+cap3+'&link='+link;
url=url+'&name='+name+'&phno='+phno+'&email='+email;