namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}
//Not to be confused with the import x = require("name") syntax used to load modules, this syntax simply creates an alias for the specified symbol

import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
