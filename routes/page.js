const router = require("express").Router();
const bodyParser = require("body-parser");
const User = require("../model/User");

const convertToPreeti = require("../public/js/preeti");

/*
DUMMy DATA
*/
const teachersData = require("../data/bank");
const varpaiData = require("../data/varpai");
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  extended: false,
});

router.get("/", (req, res) => {
  res.json({
    title: "My Post Title",
    description: "RANDOM SYSTEM GENERATED!!",
  });
});
//
//
//
//
//बाटोहरु
//
//
//
//
//
const schoolName = "अमर मा. वि. बैगुन्धुरा";
//माग फारमको बाटो ( रुट )
router.get("/Maag-Faaram", (req, res) => {
  res.status(200).render("./pages/maagFaram", {
    schoolName,
  });
});

router.post("/Maag-Faaram", urlencodedParser, async (req, res) => {
  let user = new User({
    name: convertToPreeti(req.body.name),
    yogyata: convertToPreeti(req.body.yogyata),
    training: req.body.training,
    appointedDate: req.body.appointedDate,
    badhuwaMiti: req.body.badhuwaMiti,
    position: req.body.position,
    type: req.body.type,
    level: req.body.level,
    salary: req.body.salary,
    rate: req.body.rate,
    rateNumber: req.body.rateNumber,
    grade: req.body.grade,
    kaSamKosh: req.body.kaSamKosh,
    insurance: req.body.insurance,
    principalallowence: req.body.principalallowence,
    otherAllowence: req.body.otherAllowence,
    festivalBonus: req.body.festivalBonus,
    dressBonus: req.body.dressBonus,
    remarks: req.body.remarks,
  });

  try {
    //save a user
    const savedUser = await user.save();
    console.log(`New user having name ${savedUser.name} registered.`);
    res.send(req.body);
    // res.status(201).redirect('/page/poshakBhatta')
  } catch (e) {
    res.status(400).send(e);
  }
});
//
//
//
//
//

//भर्पाई जाने बाटो ( रुट )
router.get("/varpai", async (req, res) => {
  await User.find()
    .then((teachersList) => {
      res.status(200).render("./pages/varpai", {
        schoolName,
        teachersList,
      });
      // res.send(teachersList);
    })
    .catch((e) => {
      console.error(e);
    });
});
//सञ्चयकोष जाने बाटो ( रुट )
router.get("/sanchayakosh", (req, res) => {
  res.status(200).render("./pages/sanchayakosh", {
    schoolName,
  });
});
//पोशाकभत्ता जाने बाटो ( रुट )
router.get("/poshakBhatta", async (req, res) => {
  let fetchedData = await User.find()
    .then((teachersList) => {
      res.status(200).render("./pages/poshakBhatta", {
        schoolName,
        teachersList,
      });
      // res.send(teachersList);
    })
    .catch((e) => {
      console.error(e);
    });
});
//विमा जाने बाटो ( रुट )
router.get("/bima", (req, res) => {
  res.status(200).render("./pages/bima", {
    schoolName,
  });
});
//सा.सु. कर जाने बाटो ( रुट )
router.get("/saSuKar", (req, res) => {
  res.status(200).render("./pages/saSuKar", {
    schoolName,
  });
});
//आयकर जाने बाटो ( रुट )
router.get("/aayakar", (req, res) => {
  res.status(200).render("./pages/aayakar", {
    schoolName,
  });
});
//बैंक लेटर जाने बाटो ( रुट )
router.get("/bankLetter", (req, res) => {
  res.status(200).render("./pages/bankLetter", {
    schoolName,
    teachersData,
  });
});

//बचत बृद्धिकोष जाने बाटो ( रुट )
router.get("/bachatBriddhiKosh", (req, res) => {
  res.status(200).render("./pages/bachatBriddhiKosh", {
    schoolName,
  });
});
// MYSQL
router.get("/db", (req, res) => {
  console.log("abcd");
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
  });
  let sql = "SELECT * FROM `staffs` ORDER BY `id` ASC";
  connection.query(sql, async (err, result) => {
    console.log(result);
    if (err) {
      throw err;
    }
    if (result != null) {
      res.send("Success");
    } else {
      res.send("There is no result");
    }
  });
  var insertSQL = "INSERT INTO `staffs` (`id`, `name`, `phone`, `isPrivate`) VALUES (NULL, 'Gopal Prasad', '98249821', '1')";
  connection.query(insertSQL, () => {
    console.log(`inserted`)
  });
  connection.end();

});

module.exports = router;