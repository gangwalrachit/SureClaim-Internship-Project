const router = require('express').Router();

router.get('/', function(req,res){
		res.render('rac',{});	
});

router.get('/final', function(req,res){
	var year = req.query.year;
	var corporateName = req.query.corporateName;
	var agencyName = req.query.agencyName;
	var insurer=req.query.insurer;
	var tpa = req.query.tpa;
	var insAdvisor=req.query.insAdvisor;
	var startDate=req.query.startDate;
	var expDate=req.query.expDate;
	var covType=req.query.covType;
	var depCov=req.query.depCov;
	var sumIns1=req.query.sumIns1;
	var preOpd=req.query.preOpd;
	var postOpd=req.query.postOpd;
	var rentLimit=req.query.rentLimit;
	var icuWard=req.query.icuWard;

	var si1=req.query.si1;
	var si2=req.query.si2;
	var si3=req.query.si3;

	var cn1=req.query.cn1;
	var cn2=req.query.cn2;
	var cn3=req.query.cn3;

	var cc1=req.query.cc1;
	var cc2=req.query.cc2;
	var cc3=req.query.cc3;

	var mat=req.query.mat;
	var cwl=req.query.cwl;

	var com1=req.query.com1;
	var com2=req.query.com2;
	var com3=req.query.com3;

	var cap1=req.query.cap1;
	var cap2=req.query.cap2;
	var cap3=req.query.cap3;

	var link=req.query.link;

	var name=req.query.name;
	var phno=req.query.phno;
	var email=req.query.email;

	res.render('final',{
		year: year,
		corporateName: corporateName,
		agencyName: agencyName,
		insurer: insurer,
		tpa: tpa,
		insAdvisor: insAdvisor,
		startDate: startDate,
		expDate: expDate,
		covType: covType,
		depCov: depCov,
		sumIns1: sumIns1,
		preOpd: preOpd,
		postOpd: postOpd,
		rentLimit: rentLimit,
		icuWard: icuWard,
		mat: mat,
		si1: si1, si2: si2, si3: si3,
		cn1: cn1,cn2: cn2,cn3: cn3,
		cc1: cc1,cc2: cc2,cc3: cc3,
		cwl: cwl,
		com1: com1,com2: com2,com3: com3,
		cap1: cap1,cap2: cap2,cap3: cap3,
		link: link,
		name: name,
		phno: phno,
		email: email
	})
})

module.exports = router;