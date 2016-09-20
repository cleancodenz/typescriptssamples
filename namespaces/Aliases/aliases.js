var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Triangle = (function () {
            function Triangle() {
            }
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
        var Square = (function () {
            function Square() {
            }
            return Square;
        }());
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
//Not to be confused with the import x = require("name") syntax used to load modules, this syntax simply creates an alias for the specified symbol
var polygons = Shapes.Polygons;
var sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
//# sourceMappingURL=aliases.js.map