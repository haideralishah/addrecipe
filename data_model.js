
var mongoose = require("mongoose");

// var connection = mongoose.connect("mongodb://localhost/salesManApplication");
var connection = mongoose.connect("mongodb://haider:Haider@14081947@ds047166.mlab.com:47166/recipedatabase");




var nutritionSchema = new mongoose.Schema({
    kcal: String,
    fat: String,
    saturates: String,
    carbs: String,
    sugars: String,
    fibre: String,
    protein: String,
    salt: String,
});


var recipeSchema = new mongoose.Schema({
    dish: String,
    category: [String],
    ingrd: [String],
    ingrnQty: [String],
    recipe: String,
    dishImg: String,
    dishTime: String,
    serve: String,
    dishImgType: String,
    nutrition: [nutritionSchema],
    CreatedOn: { type: Date, default: Date.now() }
});

var RecipeModel = mongoose.model("recipeSchema", recipeSchema);

function initializeModels(app) {
    app.post("/addrecipe", function (req, res) {
        console.log(req.body);

        var recipe = new RecipeModel({
            dish: req.body.dish,
            category: req.body.category,
            ingrd: req.body.ingrd,
            ingrnQty: req.body.ingrnQty,
            recipe: req.body.recipeMethod,
            dishImg: req.body.dishImg,
            dishTime: req.body.dishTime,
            serve: req.body.serve,
            dishImgType: req.body.dishImgType,
            nutrition: [{
                kcal: req.body.nutrition.kcal,
                fat: req.body.nutrition.fat,
                saturates: req.body.nutrition.saturates,
                carbs: req.body.nutrition.carbs,
                sugars: req.body.nutrition.sugars,
                fibre: req.body.nutrition.fibre,
                protein: req.body.nutrition.protein,
                salt: req.body.nutrition.salt,
            }]

        });
        recipe.save(function (err, success) {
            // console.log("user.save function")
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(success + "haider");
                res.send({ message: "Inserted Successfully", data: success });
            }
        });
    });


    app.post("/checkRecipe", function (req, res) {
        // console.log(req.body.data._id);
        RecipeModel
            .find({},
            function (err, success) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    console.log(success);
                    res.send(success);
                }
            });
    });


    app.post("/checkRecipeName", function (req, res) {
        // console.log(req.body.data._id);
        RecipeModel
            .findOne({ dish: req.body.dish },
            function (err, success) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    console.log(success);
                    if (success == null) {
                        console.log("not exist");
                        res.send(false);
                    }
                    else {
                        console.log("exist");
                        res.send(success);
                    }
                }
            });
    });


}
exports.initializeModels = initializeModels;
