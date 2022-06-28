const ApiCharacterCtrl = require("../Controllers/ApiCharacter");
const router = require("express").Router();

router.get("/character", ApiCharacterCtrl.GetAllCharacter);
router.get("/character/:id", ApiCharacterCtrl.GetIdCharacter);

module.exports = router;
